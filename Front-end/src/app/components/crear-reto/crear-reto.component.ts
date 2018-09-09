import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CrearRetoService} from '../../services/crear-reto.service';
import {NgForm} from '@angular/forms';
import {Reto} from '../../reto';

@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {
  public reto: Reto;
  constructor(private crearRetoService: CrearRetoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.reto = this.crearRetoService.getter();
  }
  /*crearReto() {
      this.crearRetoService.crearReto(this.reto).subscribe((reto) => {
        console.log('Hola');
      });
  }*/
}
