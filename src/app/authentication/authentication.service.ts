import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { UserModel } from './authentication.model'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    CreateUser(mail: string , pass: string){
        const userData: UserModel = {email: mail, password: pass}
        this.http.post('http://localhost:3000/api/user/signup', userData)
        .subscribe(response => {
            console.log('response on signup user,', response);
        });
    }
}