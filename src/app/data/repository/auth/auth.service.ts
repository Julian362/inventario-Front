// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private selectedRole!: string;
  selectedBranchId: string = '';
  selectedBranchProducts: any[] = [];
  selectedBranchSales: any[] = []
  selectedBranchUsers: any[] = [];
  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    if (email === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.selectedRole =email

      this.router.navigate(['/user']);
      return true;
    }
    if (email === 'SuperAdmin' && password === 'SuperAdmin') {
        this.selectedRole =email
        this.isLoggedIn = true;
        this.router.navigate(['/user']);
        return true;
      }
      if (email === 'seller' && password === 'seller') {
        this.isLoggedIn = true;
        this.selectedRole =email

        this.router.navigate(['/product']);
        return true;
      }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  getSelectedRole(): string {
    return this.selectedRole;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  setSelectedBranchId(branchId: string): void {
    this.selectedBranchId = branchId;
  }
  setSelectedBranchUsers(users: any[]):  void {
    this.selectedBranchUsers = users;
  }
  setSelectedBranchSale(sales: any[]):  void {
    this.selectedBranchSales = sales;
  }
  getSelectedBranchId(): string {
    return this.selectedBranchId;
  }

  setSelectedBranchProducts(products: any[]): void {
    this.selectedBranchProducts = products;
  }

  getSelectedBranchProducts(): any[] {
    return this.selectedBranchProducts;
  }
  getSelectedBranchSales(): any[] {
    return this.selectedBranchSales;
  }

  getSelectedBranchUsers(): any[] {
    return this.selectedBranchUsers;
  }
}