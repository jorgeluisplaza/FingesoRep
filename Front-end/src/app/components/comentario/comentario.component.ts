import { Component, OnInit } from '@angular/core';
import {ComentarioService} from '../../services/comentario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  autor: string;
  titulo: string;
  comentario: string;
  fecha: string;

  formData: FormGroup;

  constructor(private comentarioService: ComentarioService, private form: FormBuilder, private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.getComentarios(params['id_idea']));
      this.route.params.subscribe( params => this.addComentarioIdea(params['id_idea'], params['id_comentario']));
      // this.validarComentario();
  }



  getComentarios(id_idea){
    this.comentarioService.getComentariosIdea(id_idea);
  }

  addComentarioIdea(id_idea, id_comentario){
    this.comentarioService.addComentarioIdea(id_idea, id_comentario);
  }

  /*formComentario(){
    this.formData = this.form.group({
      titulo: ['', Validators.required ],
      comentario: ['', Validators.required ],
    });
  }*/

  ngOnInit() {

  }

  crearComentario(id_usuario, titulo, comentario){
    this.comentarioService.crearComentario(id_usuario , titulo, comentario, new Date());
  }
}
