import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IdeaService} from '../../../services/idea.service';

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

  constructor(private ideaService: IdeaService) {
    this.formIdea();
  }

  ngOnInit() {
  }

  enviar(titulo, contenido, resumen) {
    const id_session = sessionStorage.getItem('id');
    this.ideaService.crearIdea(this.id_reto, id_session, titulo, contenido, resumen);
    window.location.reload(true);
  }

  formIdea() {
    this.ideaForm =  new FormGroup({
      titulo: new FormControl(this.titulo),
      contenido: new FormControl(this.contenido),
      resumen: new FormControl(this.resumen)
    });
  }



}
