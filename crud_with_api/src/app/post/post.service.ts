import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';     
import {  Observable} from 'rxjs';  
import { Post } from './post';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private apiURL = "https://jsonplaceholder.typicode.com/posts";

   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
constructor(private http:HttpClient) { }    
 
  getAll(): Observable<Post[]> {  
    return this.http.get<Post[]>(this.apiURL)  
  }    
 
  create(post:Post): Observable<Post[]> {  
    return this.http.post<Post[]>(this.apiURL, post)    
  } 

  update(id: number, post: Post): Observable<Post[]> {  
    return this.http.put<Post[]>(this.apiURL + '/' +id,post)   
  }      

  delete(id:number){
    return this.http.delete(this.apiURL + '/' + id)
  }  
  
  find(id:number): Observable<Post> {  
    return this.http.get<Post>(this.apiURL + '/' + id)
  }

}