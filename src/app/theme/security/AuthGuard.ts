import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router, private jwtHelper: JwtHelper) {

    }
    canActivate() {
        // let  jwtHelper: JwtHelper = new JwtHelper();
        console.log('i am checkin()g to see if you are logged in');
        var token = localStorage.getItem('token')
        //console.log(`$is token expired: {this.jwtHelper.isTokenExpired(token)}`);
        console.log(
            this.jwtHelper.decodeToken(token),
            this.jwtHelper.getTokenExpirationDate(token),
            this.jwtHelper.isTokenExpired(token)
        );
        if (localStorage.getItem('token') && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(['/login']);
    }

    canActivateChild() {
        console.log('checking child route access');
        return true;
    }

}
