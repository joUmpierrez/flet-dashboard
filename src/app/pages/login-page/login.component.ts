import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('' ,[
      Validators.required,
    ])
  });
  private auth: AuthService;
  constructor(private http: HttpClient, private router: Router) {
    this.auth = new AuthService(this.http, this.router);
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit() {
  }

  submit() {
    // this.router.navigateByUrl('/full-layout');
    console.log(this.email.value);
    this.auth.signinUser(this.email.value, this.password.value);
  }

}
