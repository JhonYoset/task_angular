import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { ResaltarUrgenteDirective } from './resaltar-urgente.directive';
import { AumentarTextoDirective } from './aumentar-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ResaltarUrgenteDirective,
    AumentarTextoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
