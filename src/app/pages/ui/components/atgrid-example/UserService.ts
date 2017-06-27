import { Config } from './../../../../app.config';
import { UserListResponse } from './modal';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class UserService {
    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }

    public constructor(private http: Http) {

    }
    public getUserList(limit: number, pageNo: number): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', localStorage.getItem('token'));
        // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option
        const url = `${Config.ServiceUrl}/users?limit=${limit}&offset=${pageNo}`;
        return this.http.get(url, options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
}