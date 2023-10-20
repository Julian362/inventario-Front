import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IBranchModel,
  IBranchRegisterModel,
  IProductModel,
  IProductSaleModel,
  ISaleModel,
} from '@domain/models';
import { BranchRepository, ProductRepository } from '@domain/repository';
import * as signalR from '@microsoft/signalr';
import { NotifierService } from 'angular-notifier';
import { BranchUseCaseProviders, productUseCaseProviders } from 'data/factory';
import { SignalRService } from 'data/signalR/signalr.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {   
  branchesList: IBranchModel[] = [];
  selectedBranchId: string = '';
  products : IProductModel [] = [];
  productsSale: {
    productId: string;   
    quantity: number;
  }[] = [];

  numbers: number[] = [];
  numbersStock: number[] = [];  
  

  constructor(    
    private readonly branchRepository: BranchRepository, 
    private readonly productRepository: ProductRepository<IProductModel>,
    private readonly saleRepository: ProductRepository<IProductSaleModel>,
    private formBuilder: FormBuilder,
    private readonly notifier: NotifierService,
    private servicio : SignalRService

  
  ) {
    this.notifier = notifier;
    this.branchForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],

      city: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      country: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
    });    
      
  }
  ngOnInit(): void {
    this.branchRepository.getAllBranch().subscribe((branch) => {
      this.branchesList = branch;

      });
      this.servicio.startConnection();
      this.servicio.recieveMessage();
      this.servicio.subjectRecieveMessage.subscribe((data) => {        
        this.branchesList.push(data);
        console.log(data);
      });
           
     
  
  }
  branchForm: FormGroup;

  factory = BranchUseCaseProviders;
  factorySale = productUseCaseProviders;

  increment(index: number): void {
    this.numbers[index] = this.numbers[index] + 1;
  }

  decrement(index: number): void {
    if (this.numbers[index] > 0) this.numbers[index] = this.numbers[index] - 1;
    else this.numbers[index] = 0;
  }

  validarNumero(id: string): boolean {
    const product = this.productsSale.find((x) => x.productId === id);
    if (product) {
      if (product.quantity <= 0) {
        return true;
      }
    }
    return false;
  }

  getNumber(id: string): number {
    const product = this.productsSale.find((x) => x.productId === id);
    return product?.quantity ? product.quantity : 0;
  }

  onSubmit(): void {
    if (this.branchForm.valid) {
      const formData: IBranchRegisterModel = {
        name: this.branchForm.get('name')?.value,
        location: {
          city: this.branchForm.get('city')?.value,
          country: this.branchForm.get('country')?.value,
        },
      };
      this.factory.createBranch
        .useFactory(this.branchRepository)
        .execute(formData)
        .subscribe({
          complete: () => {
            this.notifier.notify('success', 'Sucursal creada con éxito');
            this.branchForm.reset();
          },
          error: (error) => {
            this.notifier.notify(
              'error',
              error.error.message ? error.error.message : error
            );
          },
        });
    }
  }

  onBranchChange(): void {
    
    this.productRepository
      .getAllProduct(this.selectedBranchId)
      .subscribe((data) => {
        this.products = data;
      });
  }

  addToCart(i: string, index: number): void {
    let product = {} as IProductModel;
    product = this.products.find((x) => x.productId === i) as IProductModel;
    if (this.numbers[index] <= 0) {
      this.notifier.notify('error', 'La cantidad debe ser mayor a 0');
      return;
    }
    this.productsSale.push({
      productId: i,     
      quantity: this.numbers[index],
    });
  }

  deleteItem(id: string): void {
    this.productsSale.splice(
      this.productsSale.findIndex((x) => x.productId === id),
      1
    );
  }

  purchase(): void {
    this.factorySale.customerSale
      .useFactory(this.saleRepository)
      .execute(
        {
          products: this.productsSale,
          number: 0,
          branchId: this.selectedBranchId,
        }
      
      )     

      .subscribe({
        complete: () => {
          this.notifier.notify('success', 'Compra realizada con éxito');
          this.productsSale = [];
          this.resetNumbers();
        },
        error: (error: any) => {
          this.notifier.notify(
            'error',
            error.error.message ? error.error.message : error
          );
        },
      });
  }

  resetNumbers(): void {
    this.numbers = new Array(this.numbers.length).fill(0);
  }

  addStock(id: string, index: number): void {
    if (this.numbersStock[index] <= 0) {
      this.notifier.notify('error', 'La cantidad debe ser mayor a 0');
      return;
    }
    this.productRepository
      .registerQuantity(id, {
        quantity: this.numbersStock[index],
      })
      .subscribe({
        complete: () => {
          this.notifier.notify('success', 'Cantidad agregada con éxito');
        },
        error: (error) => {
          this.notifier.notify(
            'error',
            error.error.message ? error.error.message : error
          );
        },
      });
  }
}
