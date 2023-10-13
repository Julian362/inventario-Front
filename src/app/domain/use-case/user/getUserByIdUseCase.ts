import { IUserModel } from '@domain/models';
import { BranchRepository, UserRepository } from '@domain/repository';
import { Observable } from 'rxjs';

export class GetUserByIdUseCase {
  constructor(private UserRepository: UserRepository) {}
    execute(id: string): Observable<IUserModel> {
        return this.UserRepository.getUserById(id);
    }
}