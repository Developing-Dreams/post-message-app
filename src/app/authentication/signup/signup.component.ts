import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent {
    isLoading = true;

    constructor(public authService: AuthenticationService) { }

    OnSignUp(form: NgForm) {
        console.log('sign Up', form.value);
        if (form.invalid) {
            return;
        }
        this.authService.CreateUser(form.value.email, form.value.password);
    }

}