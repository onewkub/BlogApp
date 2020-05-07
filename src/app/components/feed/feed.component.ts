import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  isLoading : boolean = true;

  FeedBlog : Observable<any>;

  constructor( 
    private blogService: BlogService,
    ) {}

  ngOnInit() {
    this.FeedBlog = this.blogService.getAllBlog();
    this.FeedBlog.subscribe(() => this.isLoading = false);
  }

  FormatDate(date) : string{
    return this.blogService.FormatDate(date);
  }
}
