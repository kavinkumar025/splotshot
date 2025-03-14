import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataBagService } from '../data-bag.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  userName = 'John Doe'; // Replace with dynamic user data

  constructor(public router: Router, public dataBag : DataBagService){
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    console.log('Logging out...');
    // Add your logout logic here
    this.router.navigate(['/login']);
    localStorage.clear();
    this.dataBag.isUserLoggedIn = false;
  }

  navigateToContactUSPage(){
    
    this.router.navigate(['/contact']);
  }

  navigateToServicesPage(){
    
    this.router.navigate(['/services']);
  }

  navigateToHomePage(){
    
    this.router.navigate(['/home']);
  }

  navigateToUploadedVideoPage(){
    
    this.router.navigate(['/upload-video']);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = (event.target as Window).innerWidth;
    if (screenWidth >= 992) {
      this.menuOpen = false; // Close menu when switching to desktop
    }
  }
}
