import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models';
import { environment } from '../../../environments/environment';
import { ProductType } from '../product-type.enum';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss'],
})
export class ProductOneComponent implements OnInit {
  starterItem = environment.appSettings.productList.find(
    (x) => x.name === 'STARTER'
  );
  regularItem = environment.appSettings.productList.find(
    (x) => x.name === 'REGULAR'
  );

  disableStarter = false;
  disableRegular = false;

  constructor() {}

  ngOnInit(): void {
    // console.log(`startItem: ${JSON.stringify(this.starterItem)}`);
    // console.log(`regularItem: ${JSON.stringify(this.regularItem)}`);
  }

  onCancel(cancel: boolean): void{
    this.disableStarter = false;
    this.disableRegular = false;
  }

  onBuy(productBought: Product): void {
    switch (productBought.productName) {
      case 'STARTER':
        this.disableRegular = true;
        break;
      case 'REGULAR':
        this.disableStarter = true;
        break;
      default:
        break;
    }
    console.log(`You bought: ${JSON.stringify(productBought)}`);
  }
}
