import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl = environment.apiURL;
  constructor(

    private http: HttpClient
  ) { }


  public getAllBlog(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blog`);
  }

  public postBlog(postForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/blog`, postForm);
  }

  public putBlog(putForm, bid): Observable<any> {
    return this.http.put(`${this.apiUrl}/blog/${bid}`, putForm);
  }

  public addTag(ht) {
    return this.http.post(`${this.apiUrl}/tag`, ht);
  }

  public getRanking(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tag/rank`);
  }

  public getBlogContainTag(tag: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tag/${tag}`);
  }

  public FormatDate(date): string {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var _date = new Date(date);
    var rlt = `Posted at ${_date.getDate()} ${months[_date.getMonth()]} ${_date.getFullYear()} at ${_date.getHours().toString().padStart(2, '0')}:${_date.getMinutes().toString().padStart(2, '0')}`;
    return rlt;
  }
  FindHashtags(searchText) {
    var regexp = /(\s|^)\#\w\w+\b/gm
    var result = searchText.match(regexp);
    if (result) {
      result = result.map(function (s) { return s.trim().replace('#', ''); });
      return result;
    } else {
      return false;
    }
  }
}
