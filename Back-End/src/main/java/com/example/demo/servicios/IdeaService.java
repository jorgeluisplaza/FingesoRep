package com.example.demo.servicios;


import com.example.demo.modelos.Comentario;
import com.example.demo.modelos.Idea;
import com.example.demo.modelos.Usuario;
import com.example.demo.modelos.Valoracion;
import com.example.demo.repositorios.IdeaRepository;
import com.example.demo.repositorios.UsuarioRepository;
import com.example.demo.repositorios.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/ideas")
public class IdeaService {

    @Autowired
    private IdeaRepository ideaRepository;

    @Autowired
    private ValoracionRepository valoracionRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public Idea createIdea(@RequestBody Idea idea){

        return this.ideaRepository.save(idea);
    }

    @RequestMapping(value = "{id_idea}", method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin(origins = "*")
    public Idea mostrarIdea(@PathVariable String id_idea){
        return this.ideaRepository.findIdeaById(id_idea);
    }

    @RequestMapping(value = "{id_idea}/comentarios", method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin(origins = "*")
    public List<Comentario> comentarios(@PathVariable String id_idea){
        Idea idea = this.ideaRepository.findIdeaById(id_idea);
        if(idea == null){
            System.out.println("Idea no encontrada, comentarios no válidos");
            return new ArrayList<>();
        }
        return idea.getComentarios();
    }

    @RequestMapping(value = "{id_idea}/editar", method = RequestMethod.PATCH)
    @ResponseBody
    public void editarIdea(@RequestBody Idea idea){
        String id = idea.getId();
        String titulo = idea.getTitulo();
        String contenido = idea.getContenido();
        String resumen = idea.getResumen();
        Idea ideaRepo = this.ideaRepository.findIdeaById(id);
        if(ideaRepo == null){
            System.out.println("Idea no encontrada");
            return;
        }
        ideaRepo.setTitulo(titulo);
        ideaRepo.setContenido(contenido);
        ideaRepo.setResumen(resumen);
    }

    @RequestMapping(value = "{id_idea}/{id_usuario}/eliminar", method = RequestMethod.DELETE)
    @ResponseBody
    public void eliminarIdea(@PathVariable String id_idea, @PathVariable String id_usuario){
        Idea ideaRepo = this.ideaRepository.findIdeaById(id_idea);
        Usuario usuario = this.usuarioRepository.findUsuarioById(id_usuario);
        if(usuario.getNombre().equals(ideaRepo.getAutor())){
            this.ideaRepository.delete(ideaRepo);
        }else {
            System.out.println("No es el propietario de la idea");
        }
    }

    @RequestMapping(value = "{id_idea}/usuario/{id_usuario}/valorar", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity valorar(@PathVariable String id_idea, @PathVariable String id_usuario, @RequestBody Valoracion valoracion){
        Idea ideaRepo = this.ideaRepository.findIdeaById(id_idea);
        List<Valoracion> valoracionesIdeas = ideaRepo.getValoraciones();
        Usuario usuarioRepo = this.usuarioRepository.findUsuarioById(id_usuario);
        String valorador = usuarioRepo.getNombre();
        if(ideaRepo == null){
            return new ResponseEntity("Idea no encontrada para valorar", HttpStatus.NOT_FOUND);
        }else if(usuarioRepo == null){
            return new ResponseEntity("Usuario no encontrado para valorar", HttpStatus.NOT_FOUND);
        }
        for(Valoracion val: valoracionesIdeas){
            String autor = val.getAutor();
            if(autor.equals(valorador)){
                System.out.println("Ya se ha valorado esta idea");
                return new ResponseEntity("Ya se ha valorado esta idea", HttpStatus.BAD_REQUEST);
            }
        }
        Valoracion nuevaValoracion = this.valoracionRepository.save(valoracion);
        if(nuevaValoracion == null){
            System.out.println("Error al guardar valoracion");
            return new ResponseEntity("Error al guardar valoracion", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        nuevaValoracion.setAutor(valorador);
        valoracionesIdeas.add(nuevaValoracion);
        ideaRepo.recalcularValoraciones();
        this.ideaRepository.save(ideaRepo);
        this.valoracionRepository.save(nuevaValoracion);
        return new ResponseEntity("Valoracion exitosa", HttpStatus.OK);
    }

    @RequestMapping(value = "ideas-libres", method = RequestMethod.GET)
    @ResponseBody
    public List<Idea> getIdeasLibres(){
        return this.ideaRepository.findIdeaByRetoEquals("Idea Libre");
    }

    @RequestMapping(value = "/usuario/{id_usuario}/crear-idea", method = RequestMethod.POST)
    @ResponseBody
    public Idea crearIdeaLibre(@PathVariable String id_usuario, @RequestBody Idea idea) {
        Usuario usuarioRepo = this.usuarioRepository.findUsuarioById(id_usuario);
        if(usuarioRepo != null){
            List<Idea> ideasUsuario = usuarioRepo.getIdeas();
            Idea ideaLibre = this.ideaRepository.save(idea);
            ideaLibre.setAutor(usuarioRepo.getNombre());
            ideasUsuario.add(ideaLibre);
            usuarioRepo.setIdeas(ideasUsuario);
            this.usuarioRepository.save(usuarioRepo);
            return this.ideaRepository.save(ideaLibre);
        }else{
            System.out.println("Error, no existe usuario");
            return null;
        }
    }
    /*@RequestMapping(value = "{id_idea}/comentar", method = RequestMethod.POST)
    @ResponseBody
    public Idea comentar(@PathVariable String id_idea, @RequestBody String id_comentario){
        Idea idea = this.ideaRepository.findIdeaById(id_idea);
        Comentario comentarioRepo = this.comentarioRepository.findComentarioById(id_comentario);
        List<Comentario> comentariosDeIdea = idea.getComentarios();
        comentariosDeIdea.add(comentarioRepo);
        idea.setComentarios(comentariosDeIdea);
        return this.ideaRepository.save(idea);
    }*/
}
