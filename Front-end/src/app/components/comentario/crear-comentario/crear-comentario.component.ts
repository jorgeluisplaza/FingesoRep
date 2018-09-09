import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComentarioService} from '../../../services/comentario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crear-comentario',
  templateUrl: './crear-comentario.component.html',
  styleUrls: ['./crear-comentario.component.css']
})
export class CrearComentarioComponent implements OnInit {

  texto: string;
  @Input() id_idea;
  comentarForm: FormGroup;

  get diagnostic() { return JSON.stringify(this.texto); }

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.id_idea = params.get('id_idea'));
    this.formComentario();
  }

  ngOnInit() {
  }

  enviar(id_idea, id_usuario, comentario) {
    console.log(comentario);
    this.comentarioService.crearComentario(id_idea, id_usuario, comentario);
  }

  formComentario() {
    this.comentarForm =  new FormGroup({
      texto: new FormControl(this.texto)
    });
  }

}
