import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  expanded: boolean = true;

  constructor() {}

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
