import { IUserModel } from '@domain/models';
import { BranchRepository, UserRepository } from '@domain/repository';
import { Observable } from 'rxjs';

export class GetAllUserUseCase {
  constructor(private UserRepository: UserRepository) {}

  execute(): Observable<IUserModel[]> {
    return this.UserRepository.getAllUser();
  }
}