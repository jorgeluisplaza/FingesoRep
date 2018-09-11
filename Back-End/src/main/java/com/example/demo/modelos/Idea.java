package com.example.demo.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
        SimpleDateFormat formato = new SimpleDateFormat("dd-MM-YYYY HH:mm:ss");
        this.fecha_creacion = formato.format(new Date());
    }

    public String getId() {
        return id;
    }

    public List<Valoracion> getValoraciones() {
        return valoraciones;
    }

    public void recalcularValoraciones(){
        float average = 0;
        for(Valoracion val : this.valoraciones){
            average += val.getValoracion();
        }
        this.valoracion_promedio = average/this.valoraciones.size();
    }

    public float getValoracion_promedio() {
        return valoracion_promedio;
    }

    public void setValoracion_promedio(float valoracion_promedio) {
        this.valoracion_promedio = Math.round(valoracion_promedio * 10) / 10;
    }

    public List<Idea> getVersiones() {
        return versiones;
    }

    public void setVersiones(List<Idea> versiones) {
        this.versiones = versiones;
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
