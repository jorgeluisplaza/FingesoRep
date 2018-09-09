import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaRetoServiceService {
  private baseUrl = 'http://localhost:8080/retos';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor(private http: Http) { }
  getRetos(){
    return this.http.get(this.baseUrl).pipe(map(response => response.json()));
  }
}
