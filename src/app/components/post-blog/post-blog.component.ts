import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  PostForm : FormGroup;
  
  constructor(private formBuilder: FormBuilder, private blogService : BlogService) { 
    this.PostForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        body: ['', Validators.required]
      }
    )
  }

  ngOnInit() {
  }

  PostBlog(): void{
    console.log(this.PostForm.value);
    this.blogService.postBlog(this.PostForm.value).subscribe(res=>{
      console.log(res);
    });
    this.PostForm.clearValidators();
    this.PostForm.reset();
  }

}
