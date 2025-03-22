import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DataBagService } from './components/data-bag.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public title = 'splotShot';
  public isLoggedIn = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public dataBag: DataBagService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      console.log('this.isLoggedIn', this.isLoggedIn);
    }
    this.isLoggedIn = this.dataBag.isUserLoggedIn;
  }
}
