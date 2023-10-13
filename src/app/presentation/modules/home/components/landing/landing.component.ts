import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@presentation/shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  loggedIn = false;

  constructor(
    private readonly router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('token') ? true : false;
    console.log(this.loggedIn);
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
