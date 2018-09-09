package com.example.demo.servicios;


import com.example.demo.modelos.Idea;
import com.example.demo.modelos.Reto;
import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.IdeaRepository;
import com.example.demo.repositorios.RetoRepository;
import com.example.demo.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/retos")
public class RetoServicio {

    @Autowired
    private RetoRepository retoRepository;

    @Autowired
    private IdeaRepository ideaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @RequestMapping(value = "usuario/{id_usuario}/crear", method = RequestMethod.POST)
    @ResponseBody
    public Reto createReto(@PathVariable String id_usuario, @RequestBody Reto reto) {
        Reto nuevoReto = this.retoRepository.save(reto);
        Usuario usuario = this.usuarioRepository.findUsuarioById(id_usuario);
        nuevoReto.setAutor(usuario.getNombre());
        return this.retoRepository.save(nuevoReto);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Reto> indexRetos(){ return this.retoRepository.findAll(); }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public Reto mostrarReto(@PathVariable String id){
        return this.retoRepository.findRetoById(id);
    }

    /*@RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Reto mostrarRetoPorTitulo(@RequestParam("titulo") String titulo){
        return this.retoRepository.findRetoByTitulo(titulo);
    }*/

    @RequestMapping(value = "{id_reto}/usuario/{id_usuario}/crear-idea", method = RequestMethod.POST)
    @ResponseBody
    public Idea crearIdeaEnReto(@PathVariable String id_reto, @PathVariable String id_usuario, @RequestBody Idea idea) {
        Reto retoRepo = this.retoRepository.findRetoById(id_reto);
        Usuario usuario = this.usuarioRepository.findUsuarioById(id_usuario);
        Idea nuevaIdea = this.ideaRepository.save(idea);

        String nombre_usuario = usuario.getNombre();
        String nombre_reto = retoRepo.getTitulo();
        nuevaIdea.setAutor(nombre_usuario);
        nuevaIdea.setReto(nombre_reto);
        List<Idea> ideasUsuario = usuario.getIdeas();
        List<Idea> listaIdeas = retoRepo.getIdeas();
        listaIdeas.add(nuevaIdea);
        ideasUsuario.add(nuevaIdea);
        retoRepo.setIdeas(listaIdeas);
        usuario.setIdeas(ideasUsuario);

        this.retoRepository.save(retoRepo);
        this.usuarioRepository.save(usuario);
        return this.ideaRepository.save(nuevaIdea);
    }

    @RequestMapping(value = "/{id_reto}/ideas", method = RequestMethod.GET)
    @ResponseBody
    public List<Idea> getIdeasReto(@PathVariable String id_reto){
        Reto reto = this.retoRepository.findRetoById(id_reto);
        return reto.getIdeas();
    }

}
