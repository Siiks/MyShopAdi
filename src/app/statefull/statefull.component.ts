import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { Plato } from '../interface/plato';
import { ShopModel } from '../models/shop.model';
import { StatelessComponent } from '../stateless/stateless.component';

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.css']
})
export class StatefullComponent implements OnInit {
  shopModel: ShopModel = new ShopModel();
  boughtItems: Array<Plato> = [];


  constructor(){
    this.boughtItems = [];

  }

  ngOnInit(): void {

  }

  clickItem(plato: Plato) {
    this.boughtItems.push(plato);
  }

  totalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce((prev: number, item: Plato) => {
        return prev + item.price;
      }, 0);
    } else {
      return 0;
    }
  }
}
