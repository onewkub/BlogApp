import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { TagBlogComponent } from "./components/tag-blog/tag-blog.component";
import { FeedComponent } from './components/feed/feed.component';


const routes: Routes = [
  { path: '', component: BlogComponent, children: [
    { path: ':tag', component: TagBlogComponent },
    { path: '', component: FeedComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
