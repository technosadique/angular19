import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  saveblog(blog: Blog) {
    const url = "http://localhost:3000/blogs"
    return this.http.post<Blog[]>(url, blog)
  }

  updateblog(id: string, blog: Blog) {
    const url = "http://localhost:3000/blogs"
    return this.http.put(url + "/" + id, blog)
  }

  deleteblog(id: string) {
    const url = "http://localhost:3000/blogs"
    return this.http.delete(url + "/" + id)
  }

  findblog(id: string) {
    const url = "http://localhost:3000/blogs"
    return this.http.get<Blog[]>(url + "/" + id)
  }

  getblog() {
    const url = "http://localhost:3000/blogs"
    return this.http.get<Blog[]>(url)

  }

}
