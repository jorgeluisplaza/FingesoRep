package com.example.demo.servicios;


import com.example.demo.modelos.Comentario;
import com.example.demo.modelos.Idea;
import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.ComentarioRepository;
import com.example.demo.repositorios.IdeaRepository;
import com.example.demo.repositorios.UsuarioRepository;

import com.example.demo.repositorios.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Null;
import java.util.List;

@CrossOrigin(value = "*")
@RestController
// @RequestMapping(value = "/usuarios")
public class UsuarioServicio {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private IdeaRepository ideaRepository;
    @Autowired
    private ComentarioRepository comentarioRepository;

    @RequestMapping(value = "/usuarios", method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
    public List<Usuario> getUsuario(){
        return this.usuarioRepository.findAll();
    }

    @RequestMapping(value = "/usuarios/create", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public Usuario createUsuario(@RequestBody Usuario usuario){

        return this.usuarioRepository.save(usuario);
    }

    @RequestMapping(value = "/usuarios/update", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin(origins = "*")
    public Usuario updateUsuario(@RequestBody Usuario usuario){
        Usuario user = this.usuarioRepository.findUsuarioById(usuario.getId());
        user.setRol("2");
        return this.usuarioRepository.save(user);
    }

    @RequestMapping(value = "/usuarios/{id}",method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public Usuario getUsuarioById(@PathVariable String id){
        return this.usuarioRepository.findUsuarioById(id);
    }


    @RequestMapping(value = "/usuarios/correo/{correo}", method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public ResponseEntity<Usuario> getUsuarioByCorreo(@PathVariable String correo){
        Usuario usuarioRepo = this.usuarioRepository.findUsuarioByCorreo(correo);
        if(usuarioRepo != null){
            return ResponseEntity.ok(usuarioRepo);
        }else{
            Usuario nulo = null;
            return new ResponseEntity<Usuario>(nulo, HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/usuarios/{id}/check-rol", method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public ResponseEntity checkEvaluador(@PathVariable String id){
        Usuario usuarioRepo = this.usuarioRepository.findUsuarioById(id);
        if(usuarioRepo != null){
            if(usuarioRepo.getRol().equals("1")){
                return ResponseEntity.ok("Autorizado");
            }else
                return new ResponseEntity( HttpStatus.UNAUTHORIZED);
        }else{
            System.out.println("Usuario no encontrado");
            return new ResponseEntity( HttpStatus.UNAUTHORIZED);
        }
    }

    /*@RequestMapping(value = "/usuarios/{id}/agregarIdea", method = RequestMethod.POST)
    @ResponseBody
    public Usuario addIdeaToUser(@PathVariable String id,@RequestBody Idea idea){


        Usuario user = this.usuarioRepository.findUsuarioById(id);
        List<Idea> ideas = user.getIdeas();
        Idea ideaFromRepo = this.ideaRepository.findIdeaById(idea.getId());
        ideas.add(ideaFromRepo);
        ideaFromRepo.setAutor(user);
        user.setIdeas(ideas);
        this.ideaRepository.save(ideaFromRepo);
        return this.usuarioRepository.save(user);

    }*/

    @RequestMapping(value = "ideas/{id_idea}/{id_usuario}/comentar", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin(origins = "*")
    public Comentario comentar(@PathVariable String id_idea, @PathVariable String id_usuario, @RequestBody Comentario comentario){
        Usuario usuario = this.usuarioRepository.findUsuarioById(id_usuario);
        Idea idea = this.ideaRepository.findIdeaById(id_idea);
        Comentario comentarioRepo = this.comentarioRepository.save(comentario);
        if(usuario == null){
            System.out.println("Usuario no encontrado");
        }else if(idea == null){
            System.out.println("Idea no encontrada");
        }else if(comentarioRepo == null){
            System.out.println("Error al guardar comentario");
        }else{
            System.out.println("Todo OK");
        }
        String nombreAutor = usuario.getNombre();
        comentarioRepo.setAutor(nombreAutor);
        List<Comentario> comentariosIdea = idea.getComentarios();
        List<Comentario> comentariosUsuario = usuario.getComentarios();
        comentariosUsuario.add(comentarioRepo);
        comentariosIdea.add(comentarioRepo);
        idea.setComentarios(comentariosIdea);
        usuario.setComentarios(comentariosUsuario);
        this.ideaRepository.save(idea);
        this.usuarioRepository.save(usuario);
        return this.comentarioRepository.save(comentarioRepo);
    }

    /*@RequestMapping(value = "/{id_usuario}/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public String eliminarUsuario(@PathVariable String id_usuario){
        Usuario user = this.usuarioRepository.deleteById(id_usuario);
        return user.getIdeas();
    }*/

}

