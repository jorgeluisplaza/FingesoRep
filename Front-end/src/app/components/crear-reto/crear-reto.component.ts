import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CrearRetoService} from '../../services/crear-reto.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {
  @Input() id: string;
  titulo: string;
  problema: string;
  objetivos: string;
  contenido: string;
  plazo: string;
  fecha_creacion: string;
  retoForm: FormGroup;
  constructor(private crearRetoService: CrearRetoService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.id = params.get('id_reto'));
    this.formReto();
  }

  ngOnInit() {
  }
  enviar(titulo, contenido, plazo, problema, objetivos) {
    this.crearRetoService.crearReto(titulo, contenido, plazo, problema, objetivos);
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
