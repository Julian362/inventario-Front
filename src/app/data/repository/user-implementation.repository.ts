import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModel, IUserRegister } from '@domain/models';
import { UserRepository } from '@domain/repository';
import { Observable } from 'rxjs';
import { UserImplementationRepositoryMapper } from './mappers';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  createUser(user: IUserRegister): Observable<IUserModel> {
    return this.http.post<IUserModel>(
      `https://${environment.HOST_3000}/api/v1/user/register/register`,
      user
    );
  }
  getAllUser(): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>(
      `https://${environment.HOST_3001}/api/UserQuery/GetAllUsers`
    );
  }
  getUserById(id: string): Observable<IUserModel> {
    return this.http.get<IUserModel>(
      `https://${environment.HOST_3001}/api/UserQuery/GetUserById`
    );
  }
}
