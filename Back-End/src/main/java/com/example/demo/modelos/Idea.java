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
    private String reto = "Idea Libre";
    private String resumen;
    private String contenido;
    private String fecha_creacion;
    private float valoracion_promedio;

    @JsonIgnore
    @DBRef
    private List<Comentario> comentarios;

    private String autor;

    @DBRef
    private List<Valoracion> valoraciones;


    @JsonIgnore
    @DBRef
    private List<Idea> versiones;

    public Idea(){
        this.comentarios = new ArrayList<Comentario>();
        this.versiones = new ArrayList<Idea>();
        this.valoraciones = new ArrayList<Valoracion>();
        this.fecha_creacion = String.valueOf(java.time.LocalDateTime.now());
    }

    public String getId() {
        return id;
    }

    public List<Valoracion> getValoraciones() {
        return valoraciones;
    }

    public void recalcular(){
        float average = 0;
        for(Valoracion val : this.valoraciones){
            average += val.getValoracion();
        }
        this.valoracion_promedio = average/this.valoraciones.size();
    }

    public void setValoraciones(List<Valoracion> valoraciones) {
        this.valoraciones = valoraciones;
    }

    public String getReto(){
        return this.reto;
    }
    public void setReto(String reto){
        this.reto = reto;
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

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
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
