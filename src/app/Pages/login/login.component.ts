import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
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
  });

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return alert('invalid');
    }
    console.log(this.loginForm.value);

    return alert('valid');
  }
}
