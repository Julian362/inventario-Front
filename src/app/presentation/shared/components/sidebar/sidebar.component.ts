import { Component, OnInit } from '@angular/core';
import { AuthService } from '@presentation/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  expanded: boolean = true;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {}

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
