package com.example.demo.repositorios;

import com.example.demo.modelos.Valoracion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ValoracionRepository extends MongoRepository<Valoracion, Long> {

    public Valoracion findValoracionById(String id);
    public Valoracion findValoracionByAutor(String nombre);
}
