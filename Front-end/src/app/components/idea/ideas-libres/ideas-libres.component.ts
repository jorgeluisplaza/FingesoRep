import { Component, OnInit } from '@angular/core';
import {IdeaService} from '../../../services/idea.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ideas-libres',
  templateUrl: './ideas-libres.component.html',
  styleUrls: ['./ideas-libres.component.css']
})
export class IdeasLibresComponent implements OnInit {
  titulo: string;
  contenido: string;
  resumen: string;
  ideaForm: FormGroup;
  ideas: any = [];
  constructor(private ideaService: IdeaService) {
    this.formIdea();
    this.getIdeasLibres();
  }

  ngOnInit() {
  }
  enviar(titulo, resumen, contenido) {
    const id = sessionStorage.getItem('id');
    if (id != null) {
      this.ideaService.crearIdeaLibre(id, titulo, resumen, contenido);
    } else {
      alert('Debe estar registrado para realizar esta acción!');
    }
  }
  getIdeasLibres() {
    this.ideaService.getIdeasLibres().subscribe( (ideas) => {
      this.ideas = ideas;
    });
  }
  formIdea() {
    this.ideaForm =  new FormGroup({
      titulo: new FormControl(this.titulo),
      contenido: new FormControl(this.contenido),
      resumen: new FormControl(this.resumen)
    });
  }
}
