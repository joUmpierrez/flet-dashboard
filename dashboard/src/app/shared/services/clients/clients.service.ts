import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ClientService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    handleError(error) {
        const errorMessage = error.error.errors[0];
        return throwError(errorMessage);
    }

    // getClients(){
    //     return this.http.post(clientsURL, null, this.auth.injectHeaders())
    //     .pipe(
    //         catchError(this.handleError)
    //     );
    // }
}
