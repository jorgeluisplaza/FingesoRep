package com.example.demo.servicios;

import com.example.demo.modelos.Comentario;
import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.ComentarioRepository;
import com.example.demo.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/comentarios")
public class ComentarioServicio {


    @Autowired
    private ComentarioRepository comentarioRepository;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Comentario> obtenerComentario() { return this.comentarioRepository.findAll(); }


}
