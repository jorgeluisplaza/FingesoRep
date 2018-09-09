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
  autor: string;
  reto: string;
  titulo: string;
  resumen: string;
  contenido: string;
  fecha_creacion: string;
  valProm: string;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.buscarIdea(params.get('id_idea')));
  }
  ngOnInit() {
    /*this.route.paramMap.subscribe(params => {
      this.id_idea = params.get('id_idea');
    });*/
  }

  valorar(valoracion) {
    this.id_idea = '5b959849b2ecc430bc0c9a7e';
    const id_usuario = '5b956fc1b2ecc40cb4afa64d';
    this.ideaService.valorarIdea(this.id_idea, id_usuario, valoracion);
  }

  buscarIdea(id_idea) {
    this.id_idea = id_idea;
    this.ideaService.getIdeaById(id_idea).subscribe((idea) => {
      this.titulo = idea.titulo;
      this.autor = idea.autor;
      this.reto = idea.reto;
      this.resumen = idea.resumen;
      this.contenido = idea.contenido;
      this.fecha_creacion = idea.fecha_creacion;
      this.valProm = idea.valoracion_promedio;
    });
  }
}
