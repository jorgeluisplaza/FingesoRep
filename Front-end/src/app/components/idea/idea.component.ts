import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import {ActivatedRoute} from '@angular/router';
import {Error} from 'tslint/lib/error';


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
  valoraciones: Array<any> = [];
  ratings: Array<number> = [0, 0, 0, 0, 0];
  total = 0;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.buscarIdea(params.get('id_idea')));
  }
  ngOnInit() {

  }

  eliminar() {
    const id_usuario = sessionStorage.getItem('id');
    this.ideaService.eliminarIdea(this.id_idea, id_usuario);
  }

  valorar(valoracion) {
    const id_session = sessionStorage.getItem('id');
    this.ideaService.valorarIdea(this.id_idea, id_session, valoracion); // .subscribe( response => console.log(response)); //, err => function() {
      /*  if (err instanceof Error) {
          alert('Ya ha comentado esta idea!');
        } else {
          location.reload(true);
        }
      });*/
     window.location.reload();
  }

  calcularRating() {
    console.log(this.valoraciones.length);
    for (let i = 0; i < this.valoraciones.length; i++) {
      const val = this.valoraciones[i].valoracion - 1;
      this.ratings[val]++;
      this.total++;
    }
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
