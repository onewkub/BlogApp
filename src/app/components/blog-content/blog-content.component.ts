import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  @Input() blog : any;
  constructor(
    private blogService: BlogService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  FormatDate(date) : string{
    return this.blogService.FormatDate(date);
  }

  ToggleMore(more){
    more.classList.toggle("show");
  }

  openEditDialog(){
    this.dialogService.openEditDialog(this.blog);
    console.log('open Edit')
  }

  openDeleteDialog(){
    console.log('open delete')
  }
}
