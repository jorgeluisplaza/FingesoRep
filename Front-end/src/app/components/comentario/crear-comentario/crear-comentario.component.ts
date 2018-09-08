import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComentarioService} from '../../../services/comentario.service';

@Component({
  selector: 'app-crear-comentario',
  templateUrl: './crear-comentario.component.html',
  styleUrls: ['./crear-comentario.component.css']
})
export class CrearComentarioComponent implements OnInit {

  formData: FormGroup;

  constructor(private comentarioService: ComentarioService, private form: FormBuilder) {
    this.formComentario();
  }

  ngOnInit() {
  }

  enviar(nombre_usuario, comentario) {
    this.comentarioService.crearComentario(nombre_usuario , comentario, new Date());
  }

  formComentario() {
    this.formData = this.form.group({
      comentario: ['', Validators.required],
    });
  }

  crearComentario(nombre, tituloInput, comentario){
      this.comentarioService.crearComentario(nombre, comentario, new Date());
  }
}
