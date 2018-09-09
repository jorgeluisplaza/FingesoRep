package com.example.demo.modelos;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

    @Document
    public class Valoracion {


        @Id
        private String id;

        private String autor;
        private float valoracion;
        private String hora;

        public Valoracion() {
            this.hora = String.valueOf(java.time.LocalDateTime.now());
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

        public float getValoracion() {
            return valoracion;
        }

        public void setValoracion(float valoracion) {
            this.valoracion = valoracion;
        }

    }
