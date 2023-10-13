import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductModel, IProductRegisterModel } from '@domain/models';
import { ProductRepository } from '@domain/repository';
import { Observable } from 'rxjs';
import { ProductImplementationRepositoryMapper } from './mappers';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductImplementationRepository extends ProductRepository {
  productMapper = new ProductImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }

  createProduct(product: IProductRegisterModel): Observable<IProductModel> {
    return this.http.post<IProductModel>(
      `https://${environment.HOST_3000}/api/v1/product/register/register`,
      product
    );
  }

  getAllProduct(): Observable<IProductModel[]> {
    return this.http.get<IProductModel[]>(
      `https://${environment.HOST_3001}/api/ProductQuery/GetAllProducts`
    );
  }

  getProductById(id: string): Observable<IProductModel> {
    return this.http.get<IProductModel>(
      `https://${environment.HOST_3001}/api/ProductQuery/GetProductById`
    );
  }

  registerQuantity( id: string, quantity: number): Observable<IProductModel> {
    return this.http.patch<IProductModel>(
      `https://${environment.HOST_3000}/api/v1/product/register/purchase/`,
      quantity
    );
  }

  registerCustomerSale( id: string, quantity: number): Observable<IProductModel> {
    return this.http.patch<IProductModel>(
      `https://${environment.HOST_3000}/api/v1/product/register/customer-sale`,
      quantity
    );
  }
  registerResellerSale( id: string, quantity: number): Observable<IProductModel> {
    return this.http.patch<IProductModel>(
      `https://${environment.HOST_3000}/api/v1/product/register/reseller-sale`,
      quantity
    );
  }
}










  

