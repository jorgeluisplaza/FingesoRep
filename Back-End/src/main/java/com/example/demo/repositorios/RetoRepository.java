package com.example.demo.repositorios;

import com.example.demo.modelos.Reto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RetoRepository extends MongoRepository<Reto, Long> {

    public Reto findRetoById(String id);
    public Reto findRetoByTitulo(String titulo);

}
