import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private baseUrl = 'http://localhost:8080/ideas';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }

  getIdeaById(id: string) {
    return this.http.get(this.baseUrl + '/' + id ).pipe(map(res => res.text() ? res.json() : {}));
  }

  editarIdea(id_idea: string, titulo: string, contenido: string, resumen: string){
    const idea = {
      id: id_idea,
      titulo: titulo,
      contenido: contenido,
      resumen: resumen
    };
    return this.http.patch(this.baseUrl + '/editar', idea).subscribe( res => console.log('Response editar idea OK'));
  }
}
