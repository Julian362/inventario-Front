import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GetAllProductsComponent,
  IndividualProductComponent,
} from './components';
import { ProductComponent } from './pages/product/product.component';
import { RegisterProductComponent } from '../product/components';
import { AuthGuardEmployee } from '@presentation/shared/guards';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    canActivate: [AuthGuardEmployee],
    children: [
      {
        path: 'all',
        component: GetAllProductsComponent,
      },
      {
        path: 'product/register',
        component: RegisterProductComponent,
      },
      {
        path: 'individual/:id',
        component: IndividualProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
