import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllBranchesComponent } from './components';
import { BranchComponent } from './pages/branch/branch.component';

const routes: Routes = [
  {
    path: '',
    component: BranchComponent,
    children: [
      {
        path: 'config',
        component: GetAllBranchesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
