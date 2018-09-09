import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrearIdeaService {

  private baseUrl = 'http://localhost:8080';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) {
  }

  crearIdea(id_reto: string, id_usuario: string, titulo: string, contenido: string, resumen: string) {
    const IdeaObj = {
      titulo: titulo,
      contenido: contenido,
      resumen: resumen,
    };
    return this.http.post(this.baseUrl + '/retos/' + id_reto + '/usuario/' + id_usuario + '/crear-idea', IdeaObj, { headers: this.headers})
      .subscribe(res => console.log('Response crear idea OK'));
  }
}

