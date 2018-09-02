package com.example.demo.modelos;

import org.springframework.data.annotation.Id;


public class Evaluador {

    @Id
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
