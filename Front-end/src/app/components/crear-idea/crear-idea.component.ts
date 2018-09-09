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
  @Input() id: string;
  titulo: string;
  contenido: string;
  resumen: string;
  ideaForm: FormGroup;

  constructor(private crearIdeaService: CrearIdeaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => this.id = params.get('id_idea'));
    this.formIdea();
  }

  ngOnInit() {
  }
  agregarIdea() {
    this.crearIdeaService.crearIdea(this.titulo, this.contenido, this.resumen);
  }

  enviar(titulo, contenido, resumen) {
    this.crearIdeaService.crearIdea(titulo, contenido, resumen);
  }

  formIdea() {
    this.ideaForm =  new FormGroup({
      titulo: new FormControl(this.titulo),
      contenido: new FormControl(this.contenido),
      resumen: new FormControl(this.resumen)
    });
  }



}
