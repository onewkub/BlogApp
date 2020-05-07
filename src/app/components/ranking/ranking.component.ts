import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  tagRank : Observable<any>;
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.tagRank = this.blogService.getRanking();
  }

}
