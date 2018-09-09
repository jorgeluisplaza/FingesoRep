import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import * as $ from 'jquery';

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
    this.privilegios = '0';
  }
  ngOnInit() {
  }

  createUser() {
    if (this.nombreUsuario != null && this.correo != null && this.cargo != null && this.privilegios != null) {
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
    } else {
      alert('Error, Rellene los campos correspondientemente');
    }
  }

  convEvaluador(id) {
    let usuario;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id = id) {
        usuario = this.usuarios[i];
        usuario.rol = '1';
      }
    }
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://localhost:8080/usuarios/update',
      data: JSON.stringify(usuario),
      dataType: 'json',
      timeout: 600000,
      success: function () {
        location.reload(true);
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
