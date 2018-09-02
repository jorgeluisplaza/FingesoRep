package com.example.demo.repositorios;

import com.example.demo.modelos.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, Long> {
    public Usuario findUsuarioById(String id);
}

