import {Component, Input, OnInit} from '@angular/core';
import {CrearIdeaService} from '../../services/crear-idea.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-crear-idea',
  templateUrl: './crear-idea.component.html',
  styleUrls: ['./crear-idea.component.css']
})
export class CrearIdeaComponent implements OnInit {
  @Input() id_reto: string;
  titulo: string;
  contenido: string;
  resumen: string;
  ideaForm: FormGroup;

  constructor(private crearIdeaService: CrearIdeaService) {
    // this.route.paramMap.subscribe( params => this.id_reto = params.get('id_'));
    this.formIdea();
  }

  ngOnInit() {
  }
  /*agregarIdea() {
    this.crearIdeaService.crearIdea(this.titulo, this.contenido, this.resumen);
  }*/

  enviar(id_usuario, titulo, contenido, resumen) {
    this.crearIdeaService.crearIdea(this.id_reto, id_usuario, titulo, contenido, resumen);
  }

  formIdea() {
    this.ideaForm =  new FormGroup({
      titulo: new FormControl(this.titulo),
      contenido: new FormControl(this.contenido),
      resumen: new FormControl(this.resumen)
    });
  }



}
