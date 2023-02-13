import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { StatefullComponent } from './components/statefull/statefull.component';

@NgModule({
  declarations: [
    AppComponent,
    CamisetasComponent,
    StatefullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
