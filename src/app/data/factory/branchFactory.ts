import { BranchRepository } from '@domain/repository';
import { CreateBranchUseCase, GetAllBranchUseCase } from '@domain/use-case';
import { GetBranchByIdBranchUseCase } from '@domain/use-case/branch/getBranchByIdUseCase';

export const createBranchUseCaseFactory = (
  BranchRepository: BranchRepository
) => new CreateBranchUseCase(BranchRepository);

export const getAllBranchUseCaseFactory = (
  BranchRepository: BranchRepository
) => new GetAllBranchUseCase(BranchRepository);

export const getBranchByIdUseCaseFactory = (
  BranchRepository: BranchRepository
) => new GetBranchByIdBranchUseCase(BranchRepository);

export const BranchUseCaseProviders = {
  createBranch: {
    provide: CreateBranchUseCase,
    useFactory: createBranchUseCaseFactory,
    deps: [BranchRepository],
  },
  getAllBranch: {
    provide: GetAllBranchUseCase,
    useFactory: getAllBranchUseCaseFactory,
    deps: [BranchRepository],
  },

  getBranchById: {
    provide: GetBranchByIdBranchUseCase,
    useFactory: getBranchByIdUseCaseFactory,
    deps: [BranchRepository],
  },

};
