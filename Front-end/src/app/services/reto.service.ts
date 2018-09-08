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
    return this.http.get(this.baseUrl + '/' + id ).pipe(map(response => response.json()));
  }
}
