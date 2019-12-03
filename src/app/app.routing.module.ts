import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent} from './posts/postslist/posts-list.component';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/signup/signup.component';

const routes: Routes = [
    { path: '', component: PostsListComponent},
    { path: 'create', component: PostCreateComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }