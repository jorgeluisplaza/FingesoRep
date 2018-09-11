import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Headers, Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class RetoService {

  private baseUrl = 'http://localhost:8080/retos';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }
  getRetoById(id: string) {
    return this.http.get(this.baseUrl + '/' + id ).pipe(map(res => res.text() ? res.json() : {}));
  }

  crearIdeaReto(id_reto: string, id_usuario: string, titulo: string, contenido: string, resumen: string) {
    const ideaObj = {
      titulo: titulo,
      resumen: resumen,
      contenido: contenido
    };
    return this.http.post(this.baseUrl + '/usuario/' + id_usuario + '/crear-idea', ideaObj)
      .subscribe(res => console.log('Response crear idea OK'));
  }
  getIdeasReto(id_reto: string) {
    return this.http.get(this.baseUrl + '/' + id_reto + '/ideas').pipe(map(res => res.text() ? res.json() : {}));
  }

  getRetos(){
    return this.http.get(this.baseUrl).pipe(map(response => response.json()));
  }

  crearReto(id_usuario: string, titulo: string, contenido: string, plazo: string, problema: string, objetivos: string) {
    const retoObj = {
      titulo: titulo,
      contenido: contenido,
      plazo: plazo,
      problema: problema,
      objetivos: objetivos
    }
    return this.http.post(this.baseUrl + '/usuario/' + id_usuario + '/crear', retoObj, { headers: this.headers})
      .subscribe(res => console.log('Response crear reto OK'));
  }
}
