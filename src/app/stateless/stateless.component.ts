import { Component, Input, OnInit, Output } from '@angular/core';
import { Plato } from '../interface/plato';
import { StatefullComponent } from '../statefull/statefull.component';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit  {
  @Input() plato!: Plato;

  public compra: string;
  private disable: boolean;
  boughtitems: Array<any>;
  constructor(private state: StatefullComponent){
    this.boughtitems = [];
    this.compra = "";
    this.disable = false;
  }

  ngOnInit(): void {
    this.compra = 'Comprar'
  }
  
  bought(elemen: HTMLElement){
    this.disable = true;
    elemen.setAttribute("disabled", ""); 
    elemen.setAttribute("class", "btn btn-danger")
    this.compra = 'Comprado !! ';
  }
  clickItem(plato: Plato, elemen: HTMLElement) {
    this.boughtitems.push(plato)
    !this.boughtitems.includes(plato) ? this.boughtitems.push(plato) : this.bought(elemen);
    this.state.boughtitems.push(plato);
    
  }

  boughtItemsFunc(){
    return this.boughtitems;
  }

  isDisabled(){
    return this.disable;
  }
}
