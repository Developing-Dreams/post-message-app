import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent} from './posts/posts-create/posts-create.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts/postslist/posts-list.component';


@NgModule({
  declarations: [
    AppComponent, 
    PostCreateComponent,
    HeaderComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
