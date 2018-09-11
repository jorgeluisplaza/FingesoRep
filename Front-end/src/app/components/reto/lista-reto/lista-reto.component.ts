import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RetoService } from '../../../services/reto.service';

@Component({
  selector: 'app-lista-reto',
  templateUrl: './lista-reto.component.html',
  styleUrls: ['./lista-reto.component.css']
})
export class ListaRetoComponent implements OnInit {
  public retos: any;
  public autorizado = false;
  constructor(private retoService: RetoService, private route: ActivatedRoute) {
    const rol = sessionStorage.getItem('rol');
    if(rol == "1") {
      this.autorizado = true;
    }
    this.getRetos();
  }
  ngOnInit() {
  }
  getRetos() {
    this.retoService.getRetos().subscribe(data => {
      this.retos = data;
    });
  }
}
