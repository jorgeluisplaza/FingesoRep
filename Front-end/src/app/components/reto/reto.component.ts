import { Component, OnInit } from '@angular/core';
import { RetoService } from '../../services/reto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  id_reto: string;
  titulo: string;
  problema: string;
  objetivos: string;
  contenido: string;
  plazo: string;
  restricciones: string;
  fecha_creacion: string;

  ideas: any = [];

  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.buscarReto(params.get('id')));
  }

  ngOnInit() {
  }
  buscarIdeasReto(id) {
    this.retoService.getIdeasReto(id).subscribe( response => {
      this.ideas = response;
    });
  }

  buscarReto(id: string) {
    this.id_reto = id;
    this.retoService.getRetoById(id).subscribe((reto) => {
      this.titulo = reto.titulo;
      this.objetivos = reto.objetivos;
      this.restricciones = reto.restricciones;
      this.problema = reto.problema;
      this.plazo = reto.plazo;
      this.contenido = reto.contenido;
      this.fecha_creacion = reto.fecha_creacion;
    });
    this.buscarIdeasReto(id);
  }
}
