import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: false
})
export class LoginPageComponent implements OnInit {
  hide = true;
  loading: boolean = false;
  errorSession: boolean = false;

  userForm!: FormGroup;

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    });
  }

  sendLogin(): void {
    this.loading = true;
    const { email, password } = this.userForm.value;
    this.authService.sendCredentials(email, password).subscribe({
      next: responseOk => {
        console.log('Session iniciada correcta', responseOk);
        const { token, user } = responseOk;
        this.cookie.set('token', token, 4, '/');
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
        this.loading = false;
      },
      error: err => {
        this.errorSession = true;
        console.log('⚠⚠⚠⚠Ocurrio error con tu email o password');
        this.loading = false;
      },
    });
  }
}
