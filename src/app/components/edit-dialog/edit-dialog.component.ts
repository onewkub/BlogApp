import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  PutForm: FormGroup;
  Blog: any;
  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder
  ) {
    this.PutForm = this.formBuilder.group(
      {
        title: [''],
        body: ['']
      }
    )
  }

  ngOnInit() {
  }

  PutBlog(): void {
    // var hashtagList = this.blogService.FindHashtags(this.PutForm.value.body);
    this.blogService.putBlog(this.PutForm.value, this.Blog.blogID);
    this.PutForm.clearValidators();
    this.PutForm.reset();
  }


}

