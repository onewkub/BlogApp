import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatIconModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogBodyDirective } from './directives/blog-body.directive';
import { TagBlogComponent } from './components/tag-blog/tag-blog.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogBodyDirective,
    TagBlogComponent,
    FeedComponent,
    PostBlogComponent,
    RankingComponent,
    NavbarComponent,
    BlogContentComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent]
})
export class AppModule { }
