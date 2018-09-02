package com.example.demo.repositorios;

import com.example.demo.modelos.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdeaRepository extends MongoRepository<Idea, Long> {

    public Idea findIdeaById(String id);
}
