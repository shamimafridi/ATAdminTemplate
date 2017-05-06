import { UserTokenResponse } from './login.models';
import { Modals } from './../ui/components/modals/modals.component';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Config } from '../../app.config';



@Injectable()
export class LoginService {
    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }

    public constructor(private http: Http) {

    }
    public loginUser(body: Object): Observable<UserTokenResponse> {
        debugger;
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option
        // let headers = new Headers();
        //   this.createAuthorizationHeader(headers);
        const url = `${Config.ServiceUrl}/users/auth`;
        return this.http.post(url, body, options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }



}