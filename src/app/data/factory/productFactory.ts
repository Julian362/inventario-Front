import { IProductModel, IProductSaleModel } from '@domain/models';
import { ProductRepository } from '@domain/repository';
import {
  CreateProductUseCase,
  GetAllProductUseCase,
  RegisterCustomerSaleUseCase,
  RegisterQuantityUseCase,
  RegisterSellerUseCase,
} from '@domain/use-case';
import { GetProductByIdUseCase } from '@domain/use-case/product/getProductByIdUseCase';

export const createProductUseCaseFactory = (
  productRepository: ProductRepository<IProductModel>
) => new CreateProductUseCase(productRepository);

export const getAllProductUseCaseFactory = (
  productRepository: ProductRepository<IProductModel>
) => new GetAllProductUseCase(productRepository);

export const getProductByIdUseCaseFactory = (
  productRepository: ProductRepository<IProductModel>
) => new GetProductByIdUseCase(productRepository);

export const RegisterQuantityUseCaseFactory = (
  productRepository: ProductRepository<IProductModel>
) => new RegisterQuantityUseCase(productRepository);

export const registerReSellerUseCaseFactory = (
  productRepository: ProductRepository<IProductSaleModel>
) => new RegisterSellerUseCase(productRepository);

export const registerCustomerSaleUseCaseFactory = (
  productRepository: ProductRepository<IProductSaleModel>
) => new RegisterCustomerSaleUseCase(productRepository);

export const productUseCaseProviders = {
  createProduct: {
    provide: CreateProductUseCase,
    useFactory: createProductUseCaseFactory,
    deps: [ProductRepository],
  },
  registerQuantity: {
    provide: RegisterQuantityUseCase,
    useFactory: RegisterQuantityUseCaseFactory,
    deps: [ProductRepository],
  },
  customerSale: {
    provide: RegisterCustomerSaleUseCase,
    useFactory: registerCustomerSaleUseCaseFactory,
    deps: [ProductRepository],
  },
  sellerSale: {
    provide: RegisterSellerUseCase,
    useFactory: registerReSellerUseCaseFactory,
    deps: [ProductRepository],
  },
  getAllProduct: {
    provide: GetAllProductUseCase,
    useFactory: getAllProductUseCaseFactory,
    deps: [ProductRepository],
  },

  getProductById: {
    provide: GetProductByIdUseCase,
    useFactory: getProductByIdUseCaseFactory,
    deps: [ProductRepository],
  },
};
