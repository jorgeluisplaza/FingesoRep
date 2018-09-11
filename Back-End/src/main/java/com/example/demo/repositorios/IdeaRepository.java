package com.example.demo.repositorios;

import com.example.demo.modelos.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IdeaRepository extends MongoRepository<Idea, Long> {

    public Idea findIdeaById(String id);
    public List<Idea> findIdeaByRetoEquals(String reto);
}
