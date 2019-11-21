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

    // posts = [
    //     {title:'1st post', content:'this is 1st post\'s content...'},
    //     {title:'2nd post', content:'this is 2nd post\'s content...'},
    //     {title:'3rd post', content:'this is 3rd post\'s content...'}
    // ]

    posts: Post[] = [];
    private postSubs: Subscription;
    constructor(public postsService: PostsService) { }

    ngOnInit() {
        this.postsService.getPosts();
        this.postSubs = this.postsService.getUpdatedPostsListener()
            .subscribe((posts: Post[]) => {
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