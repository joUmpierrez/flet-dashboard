import { Injectable } from "@angular/core";
import { ordersURL, driversURL } from 'app/shared/routes/server-routes';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    getOrders() {
        return this.http.get(ordersURL, this.auth.injectHeaders())
            .pipe(
                catchError(this.handleError),
            );
    }

    getDrivers() {
        return this.http.post(driversURL, null, this.auth.injectHeaders())
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteOrder(id) {
        const URL = ordersURL + '/' + id;
        console.log(URL);
        return this.http.delete(URL)
            .pipe(
                catchError(this.handleError)
            )
    }

    handleError(error) {
        console.log(error);
        const errorMessage = error.error.errors[0];
        return throwError(errorMessage);
    }
}