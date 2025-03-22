import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { DataBagService } from '../components/data-bag.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    public router: Router, @Inject(PLATFORM_ID) private platformId: any,
    public dataBag : DataBagService
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get("email")!;
  }

  get password() {
    return this.loginForm.get("password")!;
  }

  public onLogin() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("loggedIn", "true");
    }
    if (this.loginForm.valid) {
      console.log("Login Successful", this.loginForm.value);
      // Add login logic (API call)
    }
    this.dataBag.isUserLoggedIn = true;
    this.router.navigate(['/home']);
  }

  public loginWithGoogle() {
    console.log("Google login clicked");
    // Add Google Authentication logic
  }
}


