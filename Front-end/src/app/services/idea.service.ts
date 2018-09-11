import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private baseUrl = 'http://localhost:8080';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }

  getIdeaById(id: string) {
    return this.http.get(this.baseUrl + '/ideas/' + id ).pipe(map(res => res.text() ? res.json() : {}));
  }

  valorarIdea(id_idea: string, id_usuario: string, valoracion: string) {
    const valoracionObj = {
      valoracion: valoracion
    };
    return this.http.post(this.baseUrl + '/ideas/' + id_idea + '/usuario/' + id_usuario + '/valorar', valoracionObj).subscribe( res => console.log(res));
      // .pipe(map( res => res.json()));
  }
  getIdeasLibres() {
    return this.http.get(this.baseUrl + '/ideas/ideas-libres').pipe(map(res => res.text() ? res.json() : {}));
  }
  eliminarIdea(id_idea, id_usuario) {
    return this.http.delete(this.baseUrl + '/ideas/' + id_idea + '/' + id_usuario + '/eliminar').subscribe( res => console.log('Response eliminar idea OK'));
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

  crearIdeaLibre(id_usuario: string, titulo: string, contenido: string, resumen: string) {
    const IdeaObj = {
      titulo: titulo,
      contenido: contenido,
      resumen: resumen,
    };
    return this.http.post(this.baseUrl + '/ideas/usuario/' + id_usuario + '/crear-idea', IdeaObj, { headers: this.headers})
      .subscribe(res => console.log('Response crear idea OK'));
  }

  editarIdea(id_idea: string, tituloInput: string, contenidoInput: string, resumen: string){
    const idea = {
      id: id_idea,
      titulo: tituloInput,
      contenido: contenidoInput,
      resumen: resumen
    };
    return this.http.patch(this.baseUrl + '/ideas/editar', idea).subscribe( res => console.log('Response editar idea OK'));
  }
}
