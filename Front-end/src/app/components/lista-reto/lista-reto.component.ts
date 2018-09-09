import { Component, OnInit } from '@angular/core';
import {ListaRetoServiceService} from '../../services/lista-reto-service.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-reto',
  templateUrl: './lista-reto.component.html',
  styleUrls: ['./lista-reto.component.css']
})
export class ListaRetoComponent implements OnInit {
  public retos: any;

  constructor(private listaRetoService: ListaRetoServiceService, private route: ActivatedRoute) {
    this.getRetos();
  }
  ngOnInit() {
  }
  getRetos() {
    this.listaRetoService.getRetos().subscribe(data => {
      this.retos = data;
    });
  }
}
