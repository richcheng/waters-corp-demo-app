import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProduct } from 'src/app/shared/models/product.interface';
@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOneComponent implements OnInit {
  starterItem = environment.appSettings.productList.find(
    (x) => x.name === 'STARTER'
  );
  regularItem = environment.appSettings.productList.find(
    (x) => x.name === 'REGULAR'
  );

  constructor() {}

  ngOnInit(): void {}
}
