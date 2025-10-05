import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private router = inject(Router);

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(100),
    ]),
    gdprAccepted: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit(): void {
    if (!this.registerForm.valid) {
      return alert('invalid');
    }

    this.authService.Register(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert(res.message);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err.message || 'unknown error');
      },
    });
  }
}
