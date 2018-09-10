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
  valoraciones: any = [];
  ratings: any = [];

  constructor(private ideaService: IdeaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.buscarIdea(params.get('id_idea')));
  }
  ngOnInit() {

  }

  valorar(valoracion) {
    const id_session = sessionStorage.getItem('id');
    this.ideaService.valorarIdea(this.id_idea, id_session, valoracion);
  }

  calcularRating() {
    console.log(this.valoraciones.length);
    const valObj = {
      val : {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      total: 0
    };
    for (let i = 0; i < this.valoraciones.length; i++) {
      const val = this.valoraciones[i].valoracion;
      console.log(val);
      valObj['val'][val] = valObj['val'][val] + 1;
      valObj['total'] = valObj['total'] + 1;
    }
    console.log(valObj);
    this.ratings = valObj;
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
      this.valoraciones = idea.valoraciones;
      this.calcularRating();
    });
  }
}
