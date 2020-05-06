import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  PostForm : FormGroup;
  isLoading : boolean = true;

  FeedBlog : Observable<any>;

  constructor( 
    private formBuilder: FormBuilder,
    private blogService: BlogService
    ) { 
    this.PostForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        body: ['', Validators.required]
      }
    )
  }

  ngOnInit() {
    this.FeedBlog = this.blogService.getAllBlog();
    this.FeedBlog.subscribe(res =>{
      console.log(res);
      this.isLoading = false;
    })
  }

  PostBlog(): void{
    console.log(this.PostForm.value);
    this.blogService.postBlog(this.PostForm.value).subscribe(res=>{
      console.log(res);
    });
    this.PostForm.clearValidators();
    this.PostForm.reset();
  }

  FormatDate(date) : string{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var _date = new Date(date);
    var rlt = `Posted at ${_date.getDate()}/${months[_date.getMonth()]}/${_date.getFullYear()} at ${_date.getHours()}:${_date.getMinutes()}`;
    // console.log(rlt);
    return rlt;
  }

}
