import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { driversURL, mostOrdersDay, mostOrdersWeek, inactivity } from 'app/shared/routes/server-routes';

@Injectable()
export class DriverService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    getDrivers() {
        return this.http.get(driversURL)
            .pipe(
                catchError(this.handleError),
            );
    }

    getMostOrdersDay(){
        return this.http.get(mostOrdersDay)
        .pipe(
            catchError(this.handleError),
        )
    }

    getMostOrdersWeek(){
        return this.http.get(mostOrdersWeek)
        .pipe(
            catchError(this.handleError),
        )
    }

    getInactivity(){
        return this.http.get(inactivity)
        .pipe(
            catchError(this.handleError),
        )
    }

    handleError(error) {
        console.log(error);
        const errorMessage = error.error.errors[0];
        return throwError(errorMessage);
    }
}
