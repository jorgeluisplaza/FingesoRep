package com.example.demo.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Reto {


    @Id
    private String id;

    private String autor;
    private String titulo;
    private String contenido;
    private String fecha_creacion;
    private String problema;
    private String plazo;
    private String beneficios;
    private String objetivos;

    @JsonIgnore
    @DBRef
    private List<Reto> versiones;

    @JsonIgnore
    @DBRef
    private List<Idea> ideas;

    public Reto(){
        this.ideas = new ArrayList<Idea>();
        this.versiones = new ArrayList<Reto>();
        SimpleDateFormat formato = new SimpleDateFormat("dd-MM-YYYY HH:mm:ss");
        this.fecha_creacion = formato.format(new Date());
    }

    public List<Idea> getIdeas() {
        return ideas;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void setIdeas(List<Idea> ideas) {
        this.ideas = ideas;
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

    public String getProblema() {
        return problema;
    }

    public void setProblema(String problema) {
        this.problema = problema;
    }

    public String getPlazo() {
        return plazo;
    }

    public void setPlazo(String plazo) {
        this.plazo = plazo;
    }

    public String getBeneficios() {
        return beneficios;
    }

    public void setBeneficios(String beneficios) {
        this.beneficios = beneficios;
    }

    public String getObjetivos() {
        return objetivos;
    }

    public void setObjetivos(String objetivos) {
        this.objetivos = objetivos;
    }


    //@DBRef
    //private Evaluador autor;

}
