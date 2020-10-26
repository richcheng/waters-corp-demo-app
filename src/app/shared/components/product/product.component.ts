import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models';

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
  @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  boughtMessage = 'BOUGHT!';
  isBought = false;
  constructor() { }

  ngOnInit(): void {
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
    this.isBought = false;
    this.cancel.emit(true);
  }

  buyProduct(): void {
    this.isBought = true;
    const productBought: Product = {
      productName: this.productName,
      productPrice: this.productPrice,
      productBackgroundColor: this.productBackgroundColor,
      productBought: true,
    };
    this.buy.emit(productBought);
  }

}
