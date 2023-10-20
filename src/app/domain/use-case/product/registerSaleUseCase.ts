import { UseCase } from '@domain/base';
import { IProductSaleModel, ISaleModel } from '@domain/models';
import { ProductRepository } from '@domain/repository';
import { Observable } from 'rxjs';

export class RegisterCustomerSaleUseCase
  implements UseCase<ISaleModel, IProductSaleModel>
{
  constructor(
    private productRepository: ProductRepository<IProductSaleModel>
  ) {}

  execute(product: ISaleModel): Observable<IProductSaleModel> {
    return this.productRepository.registerCustomerSale(product);
  }
}

