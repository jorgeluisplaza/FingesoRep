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
  beneficios: string;
  fecha_creacion: string;
  retoForm: FormGroup;

  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    const rol = sessionStorage.getItem('rol');
    if(rol != '1') {
      alert('No está autorizado para acceder a este sitio');
      window.location.replace('/');
    }
    this.formReto();
  }

  ngOnInit() {
  }
  enviar(titulo, contenido, plazo, problema, beneficios, objetivos) {
    const id_session = sessionStorage.getItem('id');
    this.retoService.crearReto(id_session, titulo, contenido, plazo, problema, beneficios, objetivos);
    window.location.replace('/retos');
  }

  formReto() {
    this.retoForm =  new FormGroup({
      titulo: new FormControl(this.titulo),
      problema: new FormControl(this.problema),
      objetivos: new FormControl(this.objetivos),
      beneficios: new FormControl(this.beneficios),
      contenido: new FormControl(this.contenido),
      plazo: new FormControl(this.plazo)
    });
  }
}
