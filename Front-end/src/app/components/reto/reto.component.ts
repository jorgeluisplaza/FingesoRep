import { Component, OnInit } from '@angular/core';
import { RetoService } from '../../services/reto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  tituloInput: string;
  problema: string;
  objetivo: string;
  resumen: string;
  contenidoInput: string;
  plazo: string;
  fecha_creacion: string;

  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.buscarReto(params['id']));
  }

  ngOnInit() {
  }

  buscarReto(id: string){
    this.retoService.getRetoById(id).subscribe((Reto) => {
      this.tituloInput = Reto.tituloInput;
      this.problema = Reto.problema;
      this.objetivo = Reto.objetivo;
      this.plazo = Reto.plazo;
      this.resumen = Reto.resumen;
      this.contenidoInput = Reto.contenidoInput;
      this.fecha_creacion = Reto.fecha_creacion;
    });
  }
}
