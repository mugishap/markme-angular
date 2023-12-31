import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    login = (data: { email: string, password: string }) => {

    }

    getLoggedInUser = () => {

    }

    getUser = (id: number) => {

    }

    logout = () => {

    }
}