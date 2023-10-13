import { UserRepository } from '@domain/repository';
import { CreateUserUseCase, GetAllBranchUseCase } from '@domain/use-case';
import { GetAllUserUseCase } from '@domain/use-case/user/getAllUserUseCase';
import { GetUserByIdUseCase } from '@domain/use-case/user/getUserByIdUseCase';

export const createUserUseCaseFactory = (userRepository: UserRepository) =>
  new CreateUserUseCase(userRepository);

export const getAllUserUseCaseFactory = (UserRepository: UserRepository) =>
  new GetAllUserUseCase(UserRepository);

export const getUserByIdUseCaseFactory = (UserRepository: UserRepository) =>
  new GetAllUserUseCase(UserRepository);

export const userUseCaseProviders = {
  createUser: {
    provide: CreateUserUseCase,
    useFactory: createUserUseCaseFactory,
    deps: [UserRepository],
  },
  getAllUser: {
    provide: GetAllUserUseCase,
    useFactory: getAllUserUseCaseFactory,
    deps: [UserRepository],
  },
  getUserById: {
    provide: GetUserByIdUseCase,
    useFactory: getUserByIdUseCaseFactory,
    deps: [UserRepository],
  },

 
};
