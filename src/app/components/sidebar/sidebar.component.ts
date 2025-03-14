import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isExpanded = true; // Default expanded

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  // Close sidebar in mobile view
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = (event.target as Window).innerWidth;
    if (screenWidth < 768) {
      this.isExpanded = false;
    }
  }
}
