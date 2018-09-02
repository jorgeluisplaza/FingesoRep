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

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'ideas/:id', component: IdeaComponent},
  { path: 'usuarios/:id', component: UsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuarioComponent,
    IdeaComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [
    UsuarioService,
    IdeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
