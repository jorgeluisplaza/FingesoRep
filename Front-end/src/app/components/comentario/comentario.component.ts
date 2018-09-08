import {Component, Input, OnInit} from '@angular/core';
import {ComentarioService} from '../../services/comentario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  @Input('id') id_idea: string;
  autor: string;
  titulo: string;
  comentario: string;
  fecha: string;
  comentarios: any;

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.getComentarios());
      this.route.params.subscribe( params => this.addComentarioIdea(this.id_idea, params['id_comentario']));
      // this.validarComentario();
  }
  getComentarios() {
    this.comentarioService.getComentariosIdea(this.id_idea);
  }

  addComentarioIdea(id_idea, id_comentario) {
    this.comentarioService.addComentarioIdea(id_idea, id_comentario);
  }


  ngOnInit() {

  }

  crearComentario(id_usuario, tituloInput, comentario){
    this.comentarioService.crearComentario(id_usuario , tituloInput, comentario, new Date());
  }
}
