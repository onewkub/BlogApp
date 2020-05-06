import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  PostForm : FormGroup;

  constructor( private formBuilder: FormBuilder) { 
    this.PostForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        body: ['']
      }
    )
  }

  ngOnInit() {
  }

  PostBlog(): void{
    console.log(this.PostForm.value);
  }

}
