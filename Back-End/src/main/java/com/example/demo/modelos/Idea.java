package com.example.demo.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.ArrayList;
import java.util.List;

public class Idea {

    @Id
    private String id;

    private String titulo;

    private String resumen;
    private String contenido;
    private String fecha_creacion;

    @JsonIgnore
    @DBRef
    private List<Comentario> comentarios;

    @JsonIgnore
    @DBRef
    private Usuario autor;

    @JsonIgnore
    @DBRef
    private List<Idea> versiones;

    public Idea(){
        this.comentarios = new ArrayList<Comentario>();
        this.versiones = new ArrayList<Idea>();
    }

    public String getId() {
        return id;
    }

    public void setId_usuario(String id_usuario) {
        this.id = id_usuario;
    }

    public String getContenido() {
        return contenido;
    }

    public String getResumen() {
        return resumen;
    }

    public void setResumen(String resumen) {
        this.resumen = resumen;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public Usuario getAutor() {
        return autor;
    }

    public void setAutor(Usuario autor) {
        this.autor = autor;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(String fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public List<Comentario> getComentarios() {
        return this.comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }
}
