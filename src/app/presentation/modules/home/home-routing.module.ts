import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'product',
    loadChildren: () => {
      return import('../product/product.module').then((m) => m.ProductModule);
    },
  },
  {
    path: 'branch',
    loadChildren: () => {
      return import('../branch/branch.module').then((m) => m.BranchModule);
    },
  },
  {
    path: 'invoices',
    loadChildren: () => {
      return import('../sale/sale.module').then((m) => m.SaleModule);
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
