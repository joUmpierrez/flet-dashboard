import { Injectable } from '@angular/core';
import { ordersURL, driversURL, ordersHourSortTime, ordersHourSortOrders, heatMapUrl } from 'app/shared/routes/server-routes';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    getOrders() {
        return this.http.get('https://server-mockup.herokuapp.com/orders')
            .pipe(
                catchError(this.handleError),
            );
    }

    getDrivers() {
        return this.http.get(driversURL)
            .pipe(
                catchError(this.handleError),
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

    ordersPerHour() {
        const URL = ordersHourSortTime;
        return this.http.get(URL)
            .pipe(
                catchError(this.handleError)
            );
    }

    ordersPerHourSortOrders() {
        const URL = ordersHourSortOrders;
        return this.http.get(URL)
            .pipe(
                catchError(this.handleError),
            );
    }

    addOrder(json){
        const URL = ordersURL;
        return this.http.post(URL,json)
        .pipe(
            catchError(this.handleError),
        )
    }

    heatMapOrders(){
        const URL = heatMapUrl;
        return this.http.get(URL)
        .pipe(
            catchError(this.handleError),
        )
    }

    handleError(error) {
        console.log(error);
        const errorMessage = error.errors[0];
        return throwError(errorMessage);
    }
}
