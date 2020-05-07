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
    var hashtagList = this.FindHashtags(this.PostForm.value.body);
    this.blogService.postBlog(this.PostForm.value).subscribe(res=>{
      var blogID = res.value.blogId;
      var htList = hashtagList.map(ht => {return {Bid: blogID, TagName: ht} });
      this.blogService.addTag(htList).subscribe(res=> console.log(res));
    });
    this.PostForm.clearValidators();
    this.PostForm.reset();
  }

  FindHashtags(searchText) {
    var regexp = /(\s|^)\#\w\w+\b/gm
    var result = searchText.match(regexp);
    if (result) {
        result = result.map(function(s){ return s.trim().replace('#', '');});
        return result;
    } else {
        return false;
    }
}
}
