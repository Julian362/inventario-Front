import { Component, OnInit } from '@angular/core';
import { IProductSaleModel } from '@domain/models';
import { GetAllSaleUseCase } from '@domain/use-case/sale/get-all.sale.use-case';
import { SaleRepository } from '../../../../../domain/repository/sales.repository';
import { SaleUseCaseProviders } from 'data/factory';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
})
export class GetAllComponent implements OnInit {
  factorySale = SaleUseCaseProviders;
  sales: IProductSaleModel[] = [];
  branchId = '';
  constructor(private readonly saleRepository: SaleRepository) {}
  ngOnInit(): void {
    this.branchId = localStorage.getItem('branchId') || '';
    this.factorySale.getAllSale
      .useFactory(this.saleRepository)
      .execute(this.branchId)
      .subscribe((data) => {
        this.sales = data;
      });
  }
}
