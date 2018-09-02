package com.example.demo.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.ArrayList;
import java.util.List;

public class Reto {


    @Id
    private String id;

    private String titulo;
    private String contenido;
    private String fecha_creacion;
    private String problema;
    private String plazo;
    private String restricciones;
    private String objetivos;

    @JsonIgnore
    @DBRef
    private List<Reto> versiones;

    public Reto(){
        this.fecha_creacion = String.valueOf(java.time.LocalDateTime.now());
        this.versiones = new ArrayList<Reto>();
    }

    public String getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public List<Reto> getVersiones() {
        return versiones;
    }

    public void setVersiones(List<Reto> versiones) {
        this.versiones = versiones;
    }

    public String getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(String fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }


    //@DBRef
    //private Evaluador autor;

}
