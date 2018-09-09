import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuarios';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }

  getUsuarios() {
    return this.http.get(this.baseUrl).pipe(map(response => response.json())); // .pipe(map(response => response.json()));
  }

  getUsuario(nombre: string) {
    return this.http.get(this.baseUrl + '/' + nombre ).pipe(map(response => response.json()));
  }

  getUsuariobyCorreo(correo: string) {
    return this.http.get(this.baseUrl + '/correo/' + correo ).pipe(map(response => response.json()));
  }
}
