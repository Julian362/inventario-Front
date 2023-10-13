import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBranchModel, IBranchRegisterModel } from '@domain/models';
import { BranchRepository } from '@domain/repository';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';
import { BranchImplementationRepositoryMapper } from './mappers';

@Injectable({
  providedIn: 'root',
})
export class BranchImplementationRepository extends BranchRepository {
  BranchMapper = new BranchImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }

  createBranch(Branch: IBranchRegisterModel): Observable<IBranchModel> {
    return this.http.post<IBranchModel>(
      `https://${environment.HOST_3000}/api/v1/branch/register/register`,
      Branch
    );
  }

  getAllBranch(): Observable<IBranchModel[]> {
    return this.http.get<IBranchModel[]>(
      `https://${environment.HOST_3001}/api/BranchQuery/GetAllBranch`
    );
  }

  getBranchById(id: string): Observable<IBranchModel> {
    return this.http.get<IBranchModel>(
      `https://${environment.HOST_3001}/api/BranchQuery/GetBranchById`
    );
  }
}
