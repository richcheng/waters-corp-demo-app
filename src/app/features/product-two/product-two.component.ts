import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProduct } from '../../shared/models/product.interface';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTwoComponent implements OnInit {
  professionalItem = environment.appSettings.productList.find(
    (x) => x.name === 'PROFESSIONAL'
  );
  ultimateItem = environment.appSettings.productList.find(
    (x) => x.name === 'ULTIMATE'
  );

  constructor() {}

  ngOnInit(): void {}

}
