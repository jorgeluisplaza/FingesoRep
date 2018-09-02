import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nombre: string;
  apellido: string;
  usuario: string;
  correo: string;
  rol: string;
  password: string;
  fecha_ingreso: string;


  constructor(private usuarioService: UsuarioService) {
/*    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.correo = correo;
    this.rol = rol;
    this.password = password;
    this.fecha_ingreso = fecha_ingreso;*/
  }
  ngOnInit() {
  this.usuarioService.getUsuarios().subscribe((usuarios) => {
    console.log(usuarios);
    });
  }
}
