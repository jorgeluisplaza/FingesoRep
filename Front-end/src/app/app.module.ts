import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { IdeaComponent } from './components/idea/idea.component';
import { IdeaFormComponent } from './components/idea/ideaForm.component';

import { UsuarioService} from './services/usuario.service';
import { IdeaService } from './services/idea.service';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { RetoComponent } from './components/reto/reto.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import {RetoService} from './services/reto.service';
import {ComentarioService} from './services/comentario.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'ideas/:id', component: IdeaComponent},
  { path: 'usuarios', component: UsuarioComponent},
  { path: 'usuarios/:id', component: UsuarioComponent},
  { path: 'retos/:id', component: RetoComponent},
  { path: 'ideas/:id_idea/comentarios', component: ComentarioComponent},
  { path: 'ideas/:id_idea/comentar/:id_comentario', component: ComentarioComponent},
  { path: 'usuarios/:id_usuario/comentar', component: ComentarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuarioComponent,
    IdeaComponent,
    RetoComponent,
    ComentarioComponent,
    IdeaFormComponent
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
    ComentarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
