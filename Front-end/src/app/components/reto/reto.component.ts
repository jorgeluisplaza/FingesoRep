import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { RetoService } from '../../services/reto.service';
=======
import {RetoService} from '../../services/reto.service';
>>>>>>> Stashed changes
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  titulo: string;
<<<<<<< Updated upstream
  problema: string;
  objetivo: string;
  resumen: string;
  contenido: string;
  plazo: string;
  fecha_creacion: string;

  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.buscarReto(params['id']));
  }

  ngOnInit() {
  }

  buscarReto(id: string){
    this.retoService.getRetoById(id).subscribe((Reto) => {
      this.titulo = Reto.titulo;
      this.problema = Reto.problema;
      this.objetivo = Reto.objetivo;
      this.plazo = Reto.plazo;
      this.resumen = Reto.resumen;
      this.contenido = Reto.contenido;
      this.fecha_creacion = Reto.fecha_creacion;
    });
  }
=======
  contenido: string;

  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.getRetos(params['id']));
  }
  ngOnInit() {
  }
  getRetos(id: String){
    this.retoService.getRetos().subscribe((Reto) => {
      this.titulo = Reto.titulo;
      this.contenido = Reto.contenido;
    });
  }

>>>>>>> Stashed changes
}
