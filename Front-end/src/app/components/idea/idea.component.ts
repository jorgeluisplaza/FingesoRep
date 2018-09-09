import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  id_idea: string;
  titulo: string;
  resumen: string;
  contenido: string;
  fecha_creacion: string;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.buscarIdea(params.get('id_idea')));
  }
  ngOnInit() {
    /*this.route.paramMap.subscribe(params => {
      this.id_idea = params.get('id_idea');
    });*/
  }

  buscarIdea(id_idea) {
    this.id_idea = id_idea;
    this.ideaService.getIdeaById(id_idea).subscribe((idea) => {
      this.titulo = idea.titulo;
      this.resumen = idea.resumen;
      this.contenido = idea.contenido;
      this.fecha_creacion = idea.fecha_creacion;
    });
  }
}
