import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllBranchesComponent, RegisterComponent } from './components';
import { BranchComponent } from './pages/branch/branch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'config',
        component: GetAllBranchesComponent,
      },
      {
        path: 'branch/register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
