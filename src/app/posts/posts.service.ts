import { Post } from "./posts.model";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class PostsService {
    private posts: Post[] = [];
    private updatedPosts = new Subject<Post[]>();

    constructor(private http: HttpClient, private router: Router) { }

    getPosts() {
        this.http.get<{ message: string, posts: any }>('http://localhost:3000/api/posts')
            .pipe(map((postData) => {
                return postData.posts.map(post => {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id
                    }
                })
            }))
            .subscribe((mappedPosts) => {
                //console.log(mappedPosts);
                this.posts = mappedPosts;
                this.updatedPosts.next([...this.posts]);
            });
    }

    getUpdatedPostsListener() {
        return this.updatedPosts.asObservable();
    }

    addPost(t: string, c: string) {
        const postInput: Post = { id: null, title: t, content: c };

        this.http.post<{ message: string, postId: string }>('http://localhost:3000/api/posts', postInput)
            .subscribe((response) => {
                console.log(response.message);
                postInput.id = response.postId;
                this.posts.push(postInput);
                this.updatedPosts.next([...this.posts]);
                console.log('this.posts:', this.posts);
                this.router.navigate(["/"]);
            });
    }

    deletePost(postId: string) {
        this.http.delete('http://localhost:3000/api/posts/' + postId)
            .subscribe(() => {
                console.log("Deleted");
                const currentPosts = this.posts.filter(post => post.id != postId);
                this.posts = currentPosts;
                this.updatedPosts.next([...this.posts]);
                //this.router.navigate(["/"]);
            });
    }
}
