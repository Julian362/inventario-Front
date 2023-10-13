import { ILoginResponse } from '@domain/models';
import { UserRepository } from '@domain/repository';
import { Observable } from 'rxjs';
export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(email: string, password: string): Observable<ILoginResponse> {
    console.log(email, password);
    return this.userRepository.login(email, password);
  }
}
