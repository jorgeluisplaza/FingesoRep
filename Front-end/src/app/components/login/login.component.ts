import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private correoIngreso: string;
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
          console.log(data);
          sessionStorage.setItem('id', data.id);
          sessionStorage.setItem( 'username', data.nombre);
          window.location.replace('/retos');
        },
        error: function (e) {
          console.log('correo no valido');
        }
      });
    } else {
      alert('Debe Ingresar un correo');
    }
  }
}
