import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { IProduct } from '../../shared/models/product.interface';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.scss']
})
export class ProductTwoComponent implements OnInit {

  professionalItem = environment.appSettings.productList.find(x => x.name === 'PROFESSIONAL');
  ultimateItem = environment.appSettings.productList.find(x => x.name === 'ULTIMATE');
  disableProfessional = false;
  disableUltimate = false;
  constructor() { }

  ngOnInit(): void {
    console.log(`professionalItem: ${JSON.stringify(this.professionalItem)}`);
    console.log(`ultimateItem: ${JSON.stringify(this.ultimateItem)}`);
  }

  onCancel(cancel: boolean): void{
    this.disableProfessional = false;
    this.disableUltimate = false;
  }
  onBuy(productBought: Product): void {
    switch (productBought.productName) {
      case 'PROFESSIONAL':
        this.disableUltimate = true;
        break;
      case 'ULTIMATE':
        this.disableProfessional = true;
        break;
      default:
        break;
    }
  }
}
