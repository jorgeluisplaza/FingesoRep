import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  titulo: string;
  resumen: string;
  contenido: string;
  fecha_creacion: string;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.buscarIdea(params['id']));
  }
  ngOnInit() {
  }
  buscarIdea(id: string){
    this.ideaService.getIdeaById(id).subscribe((idea) => {
      this.titulo = idea.titulo;
      this.resumen = idea.resumen;
      this.contenido = idea.contenido;
      this.fecha_creacion = idea.fecha_creacion;
    });
  }
}
