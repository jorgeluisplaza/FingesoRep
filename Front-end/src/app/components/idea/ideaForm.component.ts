import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IdeaService} from '../../services/idea.service';

@Component({
  selector: 'app-idea-update-form',
  templateUrl: './editIdeaForm.html',
  styleUrls: ['./ideaForm.component.css']
})

export class IdeaFormComponent implements OnInit{
  @Input('titulo') tituloInput: string;
  @Input('resumen') resumenInput: string;
  @Input('contenido') contenidoInput: string;
  fecha_creacion: string;
  formEdit: FormGroup;

  constructor(private ideaService: IdeaService, private form: FormBuilder){
    this.initForm();
  }
  ngOnInit(){
  }

  initForm(){
    this.formEdit = this.form.group({
      tituloInput: ['', Validators.required],
      resumenInput: ['', Validators.required],
      contenidoInput: ['', Validators.required],
    });
  }

  update(id_idea){
    this.ideaService.editarIdea(id_idea).subscribe((response) =>{
      console.log(response);
    });
  }
}
