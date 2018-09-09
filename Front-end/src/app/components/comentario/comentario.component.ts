import {Component, Input, OnInit} from '@angular/core';
import {ComentarioService} from '../../services/comentario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  @Input() id_idea: string;
  autor: string;
  titulo: string;
  comentario: string;
  fecha: string;
  comentarios: any = [];

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.id_idea = params.get('id_idea'));
      // this.route.params.subscribe( params => this.addComentarioIdea(this.id_idea, params['id_comentario']));
      this.getComentarios(this.id_idea);
  }
  getComentarios(id_idea) {
    this.comentarioService.getComentariosIdea(id_idea).subscribe(response => {
      this.comentarios = response;
    });
  }

  addComentarioIdea(id_idea, id_comentario) {
    this.comentarioService.addComentarioIdea(id_idea, id_comentario);
  }


  ngOnInit() {

  }
}
