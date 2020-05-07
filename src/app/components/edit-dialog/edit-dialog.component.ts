import { Component, OnInit, Inject } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  PutForm: FormGroup;
  
  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.PutForm = this.formBuilder.group(
      {
        title: [data.title],
        body: [data.body]
      }
    )
    console.log(data);
  }

  ngOnInit() {
  }

  PutBlog(): void {
    // var hashtagList = this.blogService.FindHashtags(this.PutForm.value.body);
    this.blogService.putBlog(this.PutForm.value, this.data.blogID);
    this.PutForm.clearValidators();
    this.PutForm.reset();
  }


}

