import { Component, OnInit } from '@angular/core';
import { RetoService } from '../../services/reto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  titulo: string;
  problema: string;
  objetivos: string;
  contenido: string;
  plazo: string;
  restricciones: string;
  fecha_creacion: string;

  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.buscarReto(params['id']));
  }

  ngOnInit() {
  }

  buscarReto(id: string){
    this.retoService.getRetoById(id).subscribe((reto) => {
      this.titulo = reto.titulo;
      this.objetivos = reto.objetivos;
      this.restricciones = reto.restricciones;
      this.problema = reto.problema;
      this.plazo = reto.plazo;
      this.contenido = reto.contenido;
      this.fecha_creacion = reto.fecha_creacion;
    });
  }
}
