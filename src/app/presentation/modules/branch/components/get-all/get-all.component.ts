import { Component, OnInit } from '@angular/core';
import { IBranchModel } from '@domain/models';
import { BranchRepository } from '@domain/repository';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
})
export class GetAllBranchesComponent implements OnInit {
  selectedBranchId: string = '';
  branchesList: IBranchModel[] = [];

  constructor(
    private readonly branchRepository: BranchRepository,
    private readonly notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.branchRepository.getAllBranch().subscribe((data) => {
      this.branchesList = data;
    });
  }
  onBranchChange() {
    localStorage.setItem('branchId', this.selectedBranchId);
  }
}
