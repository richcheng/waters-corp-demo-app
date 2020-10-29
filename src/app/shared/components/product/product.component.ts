import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductsStoreService } from 'src/app/core/services/products-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Input() productPrice: number;
  // @Input() productDesc: string;
  @Input() productBackgroundColor: string;
  // @Output() buy: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  // @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly boughtMessage = 'BOUGHT!';
  productBought: string | null;

  constructor(private productsStoreService: ProductsStoreService) {}

  ngOnInit(): void {}

  getDisableStatus(): boolean {
    this.productBought = this.productsStoreService.getBoughtProduct();
    let disabled = false;
    if (this.productBought !== null) {
      if (this.productName !== this.productBought){
        disabled = true;
      }
    }
    return disabled;
  }

  getBackgroundColor(): string {
    return this.productBackgroundColor;
  }
  productDesc(): string {
    return `${this.productName === 'ULTIMATE' ? 'The ' : ''}${this.toPascalCase(this.productName)} features for your business to grow.`;
  }

  toPascalCase(message: string): string{
    return message.charAt(0).toUpperCase() + message.substr(1).toLowerCase();
  }

  cancelProduct(): void {
    this.productsStoreService.changeBoughtProduct(null);
  }

  buyProduct(): void {
    this.productsStoreService.changeBoughtProduct(this.productName);
  }

}
