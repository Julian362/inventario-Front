import { IProductModel } from '@domain/models';
import { ProductRepository } from '@domain/repository';
import { Observable } from 'rxjs';

export class GetProductByIdUseCase {
  constructor(private productRepository: ProductRepository<IProductModel>) {}

  execute(id: string): Observable<IProductModel> {
    return this.productRepository.getProductById(id);
  }
}
