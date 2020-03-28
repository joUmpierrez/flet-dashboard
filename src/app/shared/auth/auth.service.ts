import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { signInURL } from '../routes/server-routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  token: string;

  constructor(private http: HttpClient, private route: Router) { }

  extractHeaders(res) {
    localStorage.setItem('token', res.body['access_token']);
  }

  injectHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'token': localStorage.getItem('token'),
      }),
      // observe: 'response'
    };
    return httpOptions;
  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    localStorage.clear();
    const body = {
      email: email,
      password: password,
    };
    return this.http.post(signInURL, body, {headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
      }), observe: 'response'})
        .pipe(
            catchError(this.handleError)
        )
        .subscribe((res) => {
          console.log(res);
          this.extractHeaders(res);
          this.route.navigateByUrl('/orders');
        })
  }

  handleError(error) {
    const errorMessage = error.error.errors[0];
    return throwError(errorMessage);
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  isAuthenticated() {
    if (localStorage.getItem('token') == null) {
      return false;
    }
    return true;
  }
}
