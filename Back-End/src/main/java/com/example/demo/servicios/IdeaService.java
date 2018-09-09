package com.example.demo.servicios;


import com.example.demo.modelos.Comentario;
import com.example.demo.modelos.Idea;
import com.example.demo.repositorios.ComentarioRepository;
import com.example.demo.repositorios.IdeaRepository;
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
    private ComentarioRepository comentarioRepository;

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
	Idea ideaRepo = this.ideaRepository.findIdeaById(idea.getId());
	ideaRepo.setTitulo(idea.getTitulo());
	ideaRepo.setContenido(idea.getContenido());
	ideaRepo.setResumen(idea.getResumen());
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
