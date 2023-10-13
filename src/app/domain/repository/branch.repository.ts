import { Injectable } from '@angular/core';
import { IBranchModel, IBranchRegisterModel } from '@domain/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BranchRepository {
  abstract createBranch(Branch: IBranchRegisterModel): Observable<IBranchModel>;
  abstract getAllBranch(): Observable<IBranchModel[]>;
  abstract getBranchById(id: string): Observable<IBranchModel>;
}
