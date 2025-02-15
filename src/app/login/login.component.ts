import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  signUpButtonClick() {
    document.getElementById('container')?.classList.add("right-panel-active");
  }

  signInButtonClick() {
    document.getElementById('container')?.classList.remove("right-panel-active");
  }
}
