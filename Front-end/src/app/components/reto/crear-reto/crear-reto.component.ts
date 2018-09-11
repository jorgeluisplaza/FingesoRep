import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {RetoService} from '../../../services/reto.service';

@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {
  titulo: string;
  problema: string;
  objetivos: string;
  contenido: string;
  plazo: string;
  fecha_creacion: string;
  retoForm: FormGroup;
  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    // this.route.paramMap.subscribe( params => this.id = params.get('id_reto'));
    this.formReto();
  }

  ngOnInit() {
  }
  enviar(titulo, contenido, plazo, problema, objetivos) {
    const id_session = sessionStorage.getItem('id');
    this.retoService.crearReto(id_session, titulo, contenido, plazo, problema, objetivos);
    window.location.replace('/retos');
  }

  formReto() {
    this.retoForm =  new FormGroup({
      titulo: new FormControl(this.titulo),
      problema: new FormControl(this.problema),
      objetivos: new FormControl(this.objetivos),
      contenido: new FormControl(this.contenido),
      plazo: new FormControl(this.plazo)
    });
  }
}
