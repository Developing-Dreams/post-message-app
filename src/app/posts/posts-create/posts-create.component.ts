import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
    selector: 'app-posts-create',
    templateUrl: './posts-create.component.html',
    styleUrls: ['./posts-create.component.css']
})

export class PostCreateComponent {
    enteredTitle = "";
    enteredValue = "";
    isLoading = false;

    constructor(public postsService: PostsService) { }

    OnSavePost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.postsService.addPost(form.value.title, form.value.content);
        
        //form.resetForm();
    }

}