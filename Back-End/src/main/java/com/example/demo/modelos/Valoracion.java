package com.example.demo.modelos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.Date;

@Document
    public class Valoracion {


        @Id
        private String id;

        private String autor;
        private int valoracion;
        private String hora;

        public Valoracion() {
            SimpleDateFormat formato = new SimpleDateFormat("dd-MM-YYYY HH:mm:ss");
            this.hora = formato.format(new Date());
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getAutor() {
            return autor;
        }

        public void setAutor(String autor) {
            this.autor = autor;
        }

        public String getHora() {
            return hora;
        }

        public void setHora(String hora) {
            this.hora = hora;
        }

        public int getValoracion() {
            return valoracion;
        }

        public void setValoracion(int valoracion) {
            this.valoracion = valoracion;
        }

    }
