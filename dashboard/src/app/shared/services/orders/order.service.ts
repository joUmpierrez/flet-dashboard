import {Injectable} from "@angular/core";
import { ordersURL } from 'app/shared/routes/server-routes';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class OrderService{

    constructor(private http: HttpClient, private auth: AuthService) { }

    getOrders(){
        return this.http.post(ordersURL, null, this.auth.injectHeaders())
        .pipe(
            catchError(this.handleError)
        )
    }

    handleError(error) {
        const errorMessage = error.error.errors[0];
        return throwError(errorMessage);
      }
}