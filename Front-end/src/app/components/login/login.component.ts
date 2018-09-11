import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correoIngreso: string;
  private correoInvalido = false;

  constructor(private usuarioService: UsuarioService) {
    this.correoIngreso = '';
   }
  ngOnInit() {
  }
  verificarCorreo() {
    if (this.correoIngreso !== '') {
      const correo = this.correoIngreso;
      $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: 'http://localhost:8080/usuarios/correo/' + correo,
        data: JSON.stringify(correo),
        dataType: 'json',
        timeout: 600000,
        success: function (data) {
          sessionStorage.setItem('id', data.id);
          sessionStorage.setItem('nombre', data.nombre);
          sessionStorage.setItem('rol', data.rol);
          window.location.replace('/');
        },
        error: function (e) {
          alert('Este correo no es válido o no se encuentra registrado');
        }
      });
    } else {
      alert('Debe Ingresar un correo');
    }
  }
}
