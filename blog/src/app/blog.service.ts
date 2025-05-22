import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

getusers():Observable<Blog[]>{
const url="http://localhost:3000/blogs"
return this.http.get<Blog[]>(url)
}


saveUser(blog:Blog):Observable<Blog>{
const url="http://localhost:3000/blogs"    
    return this.http.post<Blog>(url,blog)
    
}



selectSelectedUser(id:string):Observable<Blog>{ 
const url="http://localhost:3000/blogs"  
    return this.http.get<Blog>(url+"/"+id)    
  }


  updateUser(blog:Blog):Observable<Blog>{  
const url="http://localhost:3000/blogs"   
    return this.http.put<Blog>(url+"/"+blog.id,blog)    
  }



  deleteUser(id:string):Observable<Blog>{ 
const url="http://localhost:3000/blogs"     
    return this.http.delete<Blog>(url+"/"+id) 
  }


}
