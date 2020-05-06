import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    private blogService: BlogService
    ) { 

  }

  ngOnInit() {
    this.FeedBlog = this.blogService.getAllBlog();
    this.FeedBlog.subscribe(res =>{
      this.isLoading = false;
    });
  }

  FormatDate(date) : string{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var _date = new Date(date);
    var rlt = `Posted at ${_date.getDate()} ${months[_date.getMonth()]} ${_date.getFullYear()} at ${_date.getHours().toString().padStart(2, '0')}:${_date.getMinutes().toString().padStart(2, '0')}`;
    // console.log(rlt);
    return rlt;
  }
}
