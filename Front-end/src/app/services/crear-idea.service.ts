import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrearIdeaService {

  private baseUrl = 'http://localhost:8080/ideas';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) {
  }

  crearIdea(titulo: string, contenido: string, resumen: string) {
    const IdeaObj = {
      titulo: titulo,
      contenido: contenido,
      resumen: resumen,
    };
    return this.http.post(this.baseUrl, IdeaObj, { headers: this.headers})
      .subscribe(res => console.log('Response crear idea OK'));
  }
}

  /*crearComentario(id_idea: string, id_usuario: string, texto: string) {
    const ComentarioObj = {
      texto: texto,
    };
    return this.http.post(this.baseUrl + 'ideas/' + id_idea + '/' + id_usuario + '/comentar', ComentarioObj, { headers: this.headers})
      .subscribe(res => console.log('Response crear comentario OK'));
  }
}*/
