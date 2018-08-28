package com.example.demo.servicios;

import com.example.demo.modelos.Comentario;
import com.example.demo.repositorios.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/comentarios")
public class ComentarioServicio {


    @Autowired
    private ComentarioRepository comentarioRepository;

    @RequestMapping(value = "/comentarios/crear", method = RequestMethod.POST)
    @ResponseBody
    public Comentario crearComentario(Comentario comentario){
        return this.comentarioRepository.save(comentario);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Comentario> obtenerComentario() { return this.comentarioRepository.findAll(); }


}
