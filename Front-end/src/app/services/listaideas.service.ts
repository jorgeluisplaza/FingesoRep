import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaideasService {
  private baseUrl = 'http://localhost:8080/retos';
  private headers = new Headers({'ContentType': 'application/json'});

  constructor() { }
}
