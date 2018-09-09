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
  private reto: Reto;

  constructor(private http: Http) { }

  crearReto(titulo: string, contenido: string, plazo: string) {
    const retoObj = {
      titulo: titulo,
      contenido: contenido,
      plazo: plazo,
    }
    return this.http.post(this.baseUrl, retoObj).pipe(map(res => res.text() ? res.json() : {})).subscribe(
      res => console.log('Crear reto OK'));
  }

  setter(reto: Reto) {
    this.reto = reto;
  }

  getter() {
    return this.reto;
  }

}
