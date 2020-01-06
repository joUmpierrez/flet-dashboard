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
    localStorage.setItem('client', res.headers.get('client'));
    localStorage.setItem('access-token', res.headers.get('access-token'));
    localStorage.setItem('uid', res.headers.get('uid'));
    localStorage.setItem('token-type', res.headers.get('token-type'));
    localStorage.setItem('expiry', res.headers.get('expiry'));
    localStorage.setItem('user', JSON.stringify(res.body.data));
  }

  injectHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'client': localStorage.getItem('client'),
        'access-token': localStorage.getItem('access-token'),
        'uid': localStorage.getItem('uid'),
        'token-type': localStorage.getItem('token-type'),
        'expiry': localStorage.getItem('expiry'),
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
          this.extractHeaders(res);
          this.route.navigateByUrl('/full-layout');
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
    if (localStorage.getItem('client') == null) {
      return false;
    }
    if (localStorage.getItem('token-type') == null) {
      return false;
    }
    if (localStorage.getItem('access-token') == null) {
      return false;
    }
    if (localStorage.getItem('uid') == null) {
      return false;
    }
    if (localStorage.getItem('expiry') == null) {
      return false;
    }
    return true;
  }
}
