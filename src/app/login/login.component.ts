import { Component, inject, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, AbstractControl, ValidationErrors } from "@angular/forms";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Router } from '@angular/router';
import { DataBagService } from '../components/data-bag.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent {

  public fb = inject(FormBuilder);
  public router = inject(Router);
  public dataBag = inject(DataBagService);
  public showPassword = false;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, this.validEmailWithTLDValidator, this.noSpaceValidator]],
    password: ['', [Validators.required, Validators.minLength(6), this.passwordPatternValidator]],
  });

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  public onLogin() {
    if (this.loginForm.valid) {
      const trimmedEmail = this.email.value.trim();
      this.loginForm.patchValue({ email: trimmedEmail });
      console.log("Login Successful", this.loginForm.value);
      // Simulate API success
      localStorage.setItem("loggedIn", "true");
      this.router.navigate(['/home']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  public loginWithGoogle() {
    console.log('Google login clicked');
  }

  public noSpaceValidator(control: any) {
    const value = control.value || '';
    return value.includes(' ') ? { hasSpace: true } : null;
  }

  public passwordPatternValidator(control: any) {
    const value = control.value || '';
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return pattern.test(value) ? null : { passwordStrength: true };
  }

  public validEmailWithTLDValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value?.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (email && !regex.test(email)) {
      return { invalidEmailFormat: true };
    }
    return null;
  }

}


