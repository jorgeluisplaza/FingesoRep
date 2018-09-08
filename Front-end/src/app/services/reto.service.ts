import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import {map} from 'rxjs/operators';
import {Headers, Http} from '@angular/http';
=======
import {Headers, Http} from '@angular/http';
import {map} from 'rxjs/operators';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class RetoService {

  private baseUrl = 'http://localhost:8080/retos';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }

<<<<<<< Updated upstream
  getRetoById(id: string) {
    return this.http.get(this.baseUrl + '/' + id ).pipe(map(response => response.json()));
  }
=======
  getRetos() {
    return this.http.get(this.baseUrl).pipe(map(response => response.json()));
  }
  getUsuario(nombre: string) {
    return this.http.get(this.baseUrl + '/' + nombre ).pipe(map(response => response.json()));
  }

>>>>>>> Stashed changes
}
