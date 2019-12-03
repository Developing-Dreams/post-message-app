import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../posts.model";
import { PostsService } from "../posts.service";
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

    posts: Post[] = [];
    private postSubs: Subscription;
isLoading = false;

    constructor(public postsService: PostsService) { }

    ngOnInit() {
        this.isLoading= true;
        this.postsService.getPosts();
        this.postSubs = this.postsService.getUpdatedPostsListener()
            .subscribe((posts: Post[]) => {
                this.isLoading=false;
                this.posts = posts;
            });
    }

    ngOnDestroy() {
        this.postSubs.unsubscribe();
    }

    OnDelete(postId: string){
        this.postsService.deletePost(postId);
    }
}