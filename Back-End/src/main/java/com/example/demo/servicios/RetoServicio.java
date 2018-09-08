package com.example.demo.servicios;


import com.example.demo.modelos.Reto;
import com.example.demo.repositorios.IdeaRepository;
import com.example.demo.repositorios.RetoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/retos")
public class RetoServicio {

    @Autowired
    private RetoRepository retoRepository;

    @Autowired
    private IdeaRepository ideaRepository;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public Reto createReto(@RequestBody Reto reto) { return this.retoRepository.save(reto); }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Reto> indexRetos(){ return this.retoRepository.findAll(); }


}
