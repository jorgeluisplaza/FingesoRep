import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public username: string;
  public logged = false;
  constructor() {
    if (sessionStorage.getItem('id') !== null) {
      this.logged = true;
      this.username = sessionStorage.getItem('username');
    }
  }

  ngOnInit() {
  }
  cerrarSesion() {
    sessionStorage.clear();
    window.location.replace('/login');
  }
}
