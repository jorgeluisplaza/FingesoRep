import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Headers, Http} from '@angular/http';
import {Reto} from '../reto';

@Injectable({
  providedIn: 'root'
})
export class CrearRetoService {
  private baseUrl = 'http://localhost:8080/retos';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }

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
