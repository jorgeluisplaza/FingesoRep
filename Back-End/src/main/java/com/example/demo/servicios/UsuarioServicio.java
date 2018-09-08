package com.example.demo.servicios;


import com.example.demo.modelos.Comentario;
import com.example.demo.modelos.Idea;
import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.ComentarioRepository;
import com.example.demo.repositorios.IdeaRepository;
import com.example.demo.repositorios.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioServicio {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private IdeaRepository ideaRepository;
    @Autowired
    private ComentarioRepository comentarioRepository;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Usuario> getUsuario(){
        return this.usuarioRepository.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public Usuario createUsuario(@RequestBody Usuario usuario){

        System.out.println("nombre "+usuario.getNombre());
        return this.usuarioRepository.save(usuario);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    @ResponseBody
    public Usuario updateUsuario(@RequestBody Usuario usuario){

        Usuario user = this.usuarioRepository.findUsuarioById(usuario.getId());
        user.setNombre(usuario.getNombre());
        return this.usuarioRepository.save(user);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public Usuario getUsuarioById(@PathVariable String id){
        return this.usuarioRepository.findUsuarioById(id);
    }


    @RequestMapping(value = "/{id}/agregarIdea", method = RequestMethod.POST)
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

    }

    @RequestMapping(value = "{id_usuario}/comentar", method = RequestMethod.POST)
    @ResponseBody
    public Usuario agregarComentario(@PathVariable String id_usuario, @RequestBody Comentario comentario){
        Usuario usuario = this.usuarioRepository.findUsuarioById(id_usuario);
        Comentario comentarioRepo = this.comentarioRepository.findComentarioById(comentario.getId());
        comentario.setAutor(usuario.getNombre());
        this.comentarioRepository.save(comentario);
        List<Comentario> comentariosUsuario = usuario.getComentarios();
        comentariosUsuario.add(comentario);
        return this.usuarioRepository.save(usuario);
    }

    /*@RequestMapping(value = "/{id_usuario}/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public String eliminarUsuario(@PathVariable String id_usuario){
        Usuario user = this.usuarioRepository.deleteById(id_usuario);
        return user.getIdeas();
    }*/

}

