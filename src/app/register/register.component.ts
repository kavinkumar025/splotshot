import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,public router: Router) {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      dob: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get name() {
    return this.registerForm.get("name")!;
  }

  get email() {
    return this.registerForm.get("email")!;
  }

  get phone() {
    return this.registerForm.get("phone")!;
  }

  get dob() {
    return this.registerForm.get("dob")!;
  }

  get password() {
    return this.registerForm.get("password")!;
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log("Registration Successful", this.registerForm.value);
    }
  }

  onGoogleSignUp() {
    console.log("Google Sign-Up Clicked!");
    // Implement Google OAuth or Firebase authentication here
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
