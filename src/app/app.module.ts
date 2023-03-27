import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StatefullComponent } from './statefull/statefull.component';
import { StatelessComponent } from './stateless/stateless.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefullComponent,
    StatelessComponent,
    ConfirmComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [StatefullComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
