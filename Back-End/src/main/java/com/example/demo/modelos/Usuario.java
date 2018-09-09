package com.example.demo.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

public class Usuario {

    @Id
    private String id;

    private String nombre;
    private String apellido;
    private String cargo;
    private String usuario;
    private String contraseña;
    private String correo;
    private Integer rol;
    private String fecha_ingreso;

    @JsonIgnore
    @DBRef
    private List<Idea> ideas;

    @JsonIgnore
    @DBRef
    private List<Comentario> comentarios;

    public Usuario(){
        this.ideas = new ArrayList<Idea>();
        this.comentarios = new ArrayList<Comentario>();
        this.fecha_ingreso = String.valueOf(java.time.LocalDateTime.now());
    }

    public Usuario( String usuario, String contraseña, String correo, String nombre, String apellido, String cargo, Integer rol){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.correo = correo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.cargo = cargo;
        this.rol = rol;
        this.ideas = new ArrayList<Idea>();
        this.fecha_ingreso = String.valueOf(java.time.LocalDateTime.now());
    }

    public Usuario( String usuario, String contraseña, String correo, String nombre, String apellido, String cargo){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.correo = correo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.cargo = cargo;
        this.rol = 0;
        this.ideas = new ArrayList<Idea>();
        this.fecha_ingreso = String.valueOf(java.time.LocalDateTime.now());
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Idea> getIdeas() {
        return ideas;
    }

    public void setIdeas(List<Idea> ideas) {
        this.ideas = ideas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Integer getRol() {
        return rol;
    }

    public void setRol(Integer rol) {
        this.rol = rol;
    }

    public String getFecha_ingreso() {
        return fecha_ingreso;
    }

    public void setFecha_ingreso(String fecha_ingreso) {
        this.fecha_ingreso = fecha_ingreso;
    }
}
