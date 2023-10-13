import { IBranchModel } from '@domain/models';
import { BranchRepository } from '@domain/repository';
import { Observable } from 'rxjs';

export class GetBranchByIdBranchUseCase {
  constructor(private BranchRepository: BranchRepository) {}
    execute(id: string): Observable<IBranchModel> {
        return this.BranchRepository.getBranchById(id);
    }
}