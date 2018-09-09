package com.example.demo.servicios;


import com.example.demo.modelos.Comentario;
import com.example.demo.modelos.Idea;
import com.example.demo.modelos.Usuario;
import com.example.demo.modelos.Valoracion;
import com.example.demo.repositorios.ComentarioRepository;
import com.example.demo.repositorios.IdeaRepository;
import com.example.demo.repositorios.UsuarioRepository;
import com.example.demo.repositorios.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.management.DescriptorKey;
import java.util.List;

@CrossOrigin(value = "*")
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

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Idea> indexIdeas(){
        return this.ideaRepository.findAll();
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
    public List<Comentario> mostrarComentariosIdea(@PathVariable String id_idea){
        Idea idea = this.ideaRepository.findIdeaById(id_idea);
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
        }
        ideaRepo.setTitulo(titulo);
        ideaRepo.setContenido(contenido);
        ideaRepo.setResumen(resumen);
    }

    @RequestMapping(value = "{id_idea}/usuario/{id_usuario}/valorar", method = RequestMethod.POST)
    @ResponseBody
    public void valorarIdea(@PathVariable String id_idea, @PathVariable String id_usuario, @RequestBody Valoracion valoracion){
        Idea ideaRepo = this.ideaRepository.findIdeaById(id_idea);
        List<Valoracion> valoracionesIdeas = ideaRepo.getValoraciones();
        Usuario usuarioRepo = this.usuarioRepository.findUsuarioById(id_usuario);
        String valorador = usuarioRepo.getNombre();
        if(ideaRepo == null){
            System.out.println("Idea no encontrada para valorar");
        }else if(usuarioRepo == null){
            System.out.println("Usuario no encontrado para valorar");
        }
        for(Valoracion val: valoracionesIdeas){
            String autor = val.getAutor();
            if(autor.equals(valorador)){
                System.out.println("Ya se ha valorado esta idea");
                return;
            }
        }
        Valoracion nuevaValoracion = this.valoracionRepository.save(valoracion);
        if(nuevaValoracion == null){
            System.out.println("Error al guardar valoracion");
        }
        nuevaValoracion.setAutor(valorador);
        valoracionesIdeas.add(nuevaValoracion);
        ideaRepo.recalcular();
        this.ideaRepository.save(ideaRepo);
        this.valoracionRepository.save(nuevaValoracion);
        System.out.println("Valoracion exitosa");
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
