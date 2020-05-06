import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
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


  public getAllBlog(): Observable<any>{
    return this.http.get(`${this.apiUrl}/blog`);
  }

  public postBlog(postForm): Observable<any>{
    return this.http.post(`${this.apiUrl}/blog`, postForm);
  }

  public putBlog(putForm, bid): Observable<any>{
    return this.http.put(`${this.apiUrl}/blog/bid`, putForm);
  }

  public addTag(ht){
    return this.http.post(`${this.apiUrl}/tag`, ht);
  }
}
