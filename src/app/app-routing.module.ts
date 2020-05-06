import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { TagBlogComponent } from "./components/tag-blog/tag-blog.component";


const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':tag', component: TagBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
