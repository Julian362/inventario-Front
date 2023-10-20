import { Injectable } from '@angular/core';
import {
  IProductAddQuantityModel,
  IProductRegisterModel,
  IProductSaleModel,
  ISaleModel,
} from '@domain/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export abstract class ProductRepository<T> {

  abstract createProduct(data: IProductRegisterModel): Observable<T>;  
  abstract getAllProduct(id: string): Observable<T[]>;  
  abstract getProductById(id: string): Observable<T>;
  abstract registerQuantity(id: string, data: IProductAddQuantityModel): Observable<T>;
  abstract registerCustomerSale(data: ISaleModel): Observable<IProductSaleModel>;
  abstract registerResellerSale(data: IProductSaleModel): Observable<IProductSaleModel>;
  
  
}
