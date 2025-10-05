import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
  });

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return alert('invalid');
    }

    this.authService.Login(this.loginForm.value).subscribe({
      next: (res) => {
        alert(res.message);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);

        alert(err.message || 'unknown error');
      },
    });
  }
}
