import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  private usuarios: any;
  private nombreUsuario: string;
  private correo: string;
  private cargo: string;
  private privilegios: string;

  constructor(private usuarioService: UsuarioService) {
    this.getUsuarios();
  }
  ngOnInit() {
  }

  createUser() {
    const data = {
      nombre: this.nombreUsuario,
      correo: this.correo,
      cargo: this.cargo,
      rol: this.privilegios
    };
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://localhost:8080/usuarios/create',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: 600000,
      success: function () {
        location.reload(true);
      },
      error: function (e) {
      }
    });
  }

  convEvaluador(id) {
    let usuario;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id = id) {
        usuario = this.usuarios[i];
        usuario.rol = '1';
      }
    }
    console.log(usuario);
    
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://localhost:8080/usuarios/update',
      data: JSON.stringify(usuario),
      dataType: 'json',
      timeout: 600000,
      success: function () {
        console.log("hola");
      },
      error: function (e) {

      }
    });
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

}
 