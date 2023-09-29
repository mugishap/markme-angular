import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import api from "src/app/api";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private router: Router,
        private toast: ToastrService
    ) { }

    async create(data: { names: string, email: string, gender: "MALE", telephone: string, role: "TEACHER" | "STUDENT", password: string }, loading: boolean) {
        try {
            loading = true
            console.log(data)
            const response = await api().post("/users/register", { ...data })
            console.log(response)
            this.router.navigate(['/'])
            this.toast.success("User created successfully")
        } catch (error: any) {
            console.log(error.response.data.error)
            this.toast.error(error.response.data.error)
        } finally {

        }
    }

}