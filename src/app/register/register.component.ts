import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBagService } from '../components/data-bag.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dataBag: DataBagService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, this.noSpaceValidator, this.emailDomainValidator]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordPatternValidator]],
      rePassword: ['', Validators.required]
    }, {
      validators: [this.passwordMatchValidator]
    });
  }

  get name() { return this.registerForm.get('name')!; }
  get email() { return this.registerForm.get('email')!; }
  get phone() { return this.registerForm.get('phone')!; }
  get dob() { return this.registerForm.get('dob')!; }
  get password() { return this.registerForm.get('password')!; }
  get rePassword() { return this.registerForm.get('rePassword')!; }

  onRegister() {
    if (this.registerForm.valid) {
      console.log("Registration successful", this.registerForm.value);
    }
  }

  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const hasSpace = /\s/.test(control.value);
    return hasSpace ? { hasSpace: true } : null;
  }

  emailDomainValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value) ? null : { invalidDomain: true };
  }

  passwordPatternValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return pattern.test(value) ? null : { passwordStrength: true };
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('rePassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
