import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  PostForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService
  ) {
    this.PostForm = this.formBuilder.group(
      {
        title: [''],
        body: ['']
      }
    )
  }

  ngOnInit() {
  }

  PostBlog(): void {
    var hashtagList = this.blogService.FindHashtags(this.PostForm.value.body);
    this.blogService.postBlog(this.PostForm.value).subscribe(res => {
      var blogID = res.value.blogId;
      var htList = hashtagList.map(ht => { return { Bid: blogID, TagName: ht } });
      this.blogService.addTag(htList).subscribe(res => console.log(res));
    });
    this.PostForm.clearValidators();
    this.PostForm.reset();
  }

}
