import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatefullComponent } from './statefull/statefull.component';
import { StatelessComponent } from './stateless/stateless.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefullComponent,
    StatelessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StatefullComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
