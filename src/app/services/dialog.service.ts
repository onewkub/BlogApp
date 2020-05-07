import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostBlogComponent } from '../components/post-blog/post-blog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(){
    var dialogRef = this.dialog.open(PostBlogComponent, {
      width: "40rem",
    })
  }
}
