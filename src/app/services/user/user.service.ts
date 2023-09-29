import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    create(data: { names: string, email: string, gender: "MALE", telephone: string, role: "TEACHER" | "STUDENT", password: string }) {
        const response = this.http.post(`${environment.API_URL}/users/create`, { ...data })
        console.log(response)
    }

}