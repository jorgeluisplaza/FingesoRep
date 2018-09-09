import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private baseUrl = 'http://localhost:8080/';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }

  crearComentario(id_idea: string, id_usuario: string, texto: string) {
    const ComentarioObj = {
      texto: texto,
    };
    return this.http.post(this.baseUrl + 'ideas/' + id_idea + '/' + id_usuario + '/comentar', ComentarioObj, { headers: this.headers})
      .subscribe(res => console.log('Response crear comentario OK'));
  }

  getComentariosIdea(id_idea: string) {
    return this.http.get( this.baseUrl + 'ideas/' + id_idea + '/comentarios').pipe(map(response => response.json()));
    // .subscribe( res => console.log('Response get comentarios idea OK'));
  }

  addComentarioIdea(id_idea: string, id_comentario: string) {
    return this.http.post( this.baseUrl + id_idea + '/comentar', id_comentario)
      .subscribe( res => console.log('Response add comentario idea OK'));
  }
}
