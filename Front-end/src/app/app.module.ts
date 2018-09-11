import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { IdeaComponent } from './components/idea/idea.component';

import { UsuarioService} from './services/usuario.service';
import { IdeaService } from './services/idea.service';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { RetoComponent } from './components/reto/reto.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import {RetoService} from './services/reto.service';
import {ComentarioService} from './services/comentario.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListaRetoComponent } from './components/reto/lista-reto/lista-reto.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminUsersComponent } from './components/administrador/admin-users/admin-users.component';
import { CrearComentarioComponent } from './components/comentario/crear-comentario/crear-comentario.component';
import { CrearRetoComponent } from './components/reto/crear-reto/crear-reto.component';
import { CrearIdeaComponent } from './components/idea/crear-idea/crear-idea.component';
import { LoginComponent } from './components/login/login.component';
import { IdeasLibresComponent } from './components/idea/ideas-libres/ideas-libres.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent},
  { path: 'admin', component: AdministradorComponent},
  { path: 'admin/users', component: AdminUsersComponent},
  { path: 'ideas/ideas-libres', component: IdeasLibresComponent},
  { path: 'ideas/:id_idea', component: IdeaComponent},
  { path: 'usuarios', component: UsuarioComponent},
  { path: 'usuarios/:id', component: UsuarioComponent},
  { path: 'crear-reto', component: CrearRetoComponent},
  { path: 'retos/:id', component: RetoComponent},
  { path: 'ideas/:id_idea/comentarios', component: ComentarioComponent},
  { path: 'usuarios/:id_usuario/comentar', component: ComentarioComponent},
  { path: 'retos', component: ListaRetoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuarioComponent,
    IdeaComponent,
    RetoComponent,
    ComentarioComponent,
    ListaRetoComponent,
    AdministradorComponent,
    NavBarComponent,
    AdminUsersComponent,
    FooterComponent,
    CrearComentarioComponent,
    CrearRetoComponent,
    CrearIdeaComponent,
    LoginComponent,
    IdeasLibresComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    IdeaService,
    RetoService,
    ComentarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
