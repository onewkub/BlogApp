import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  @Input() blog : any;
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
  }

  FormatDate(date) : string{
    return this.blogService.FormatDate(date);
  }

}
