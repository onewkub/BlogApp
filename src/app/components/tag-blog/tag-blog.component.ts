import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-blog',
  templateUrl: './tag-blog.component.html',
  styleUrls: ['./tag-blog.component.css']
})
export class TagBlogComponent implements OnInit {

  Blogs : Observable<any>;
  isLoading : boolean = true;
  constructor(
    private blogsService : BlogService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      this.Blogs = this.blogsService.getBlogContainTag(params.tag);
      this.Blogs.subscribe(()=> this.isLoading = false);
    });
  }

  FormatDate(date) : string{
    return this.blogsService.FormatDate(date);
  }
}
