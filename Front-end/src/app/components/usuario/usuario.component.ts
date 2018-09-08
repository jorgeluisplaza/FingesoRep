import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute} from '@angular/router';

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


  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.buscarUsuario(params['id']));
  }
  ngOnInit() {
  }
  buscarUsuario(nombre: string){
    this.usuarioService.getUsuario(nombre).subscribe((usuario) => {
      this.nombre = usuario.nombre;
      this.apellido = usuario.apellido;
      this.usuario = usuario.usuario;
      this.correo = usuario.correo;
      this.rol = usuario.rol;
      this.password = usuario.password;
      this.fecha_ingreso = usuario.fecha_ingreso;
      console.log(usuario);
    });
  }
}
