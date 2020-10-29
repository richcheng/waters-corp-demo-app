import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {

  // private readonly productBought = new BehaviorSubject<string | null>(null);
  // readonly productBoughtChanges$ = this.productBought.asObservable();
  private currentProductBought?: string = null;
  constructor() { }

  changeBoughtProduct(productBought: string | null): void {
    // console.log(`ProductsStoreService.changeBoughtProduct: ${productBought}`);
    this.currentProductBought = productBought;
  }

  getBoughtProduct(): string {
    // console.log(`ProductsStoreService.getBoughtProduct: ${this.currentProductBought}`);
    return this.currentProductBought;
  }
  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.log(errMsg);
  //   return throwError(errMsg);
  // }
}
