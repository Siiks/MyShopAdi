import { Component, OnInit } from '@angular/core';
import { Plato } from '../interface/plato';
import { ShopModel } from '../models/shop.model';

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.css']
})
export class StatefullComponent implements OnInit {
  
  shopModel: ShopModel = new ShopModel();
  boughtitems: Array<Plato> = [];
  
  constructor(){
    this.boughtitems = [];
  }
  
  ngOnInit(): void {
    
  }
  clickItem(plato: Plato) {
    this.boughtitems.push(plato);
    }
    

}
