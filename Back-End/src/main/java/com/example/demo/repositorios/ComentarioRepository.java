package com.example.demo.repositorios;

import com.example.demo.modelos.Comentario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentarioRepository extends MongoRepository<Comentario,Long> {

    public Comentario findComentarioById(String id);
}
