import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';     
import {  Observable} from 'rxjs';  
import { Post } from './post';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private apiURL = "http://localhost:3000/users";

   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
constructor(private http:HttpClient) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
  
    return this.http.get(this.apiURL) 
 
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(post:Post): Observable<any> {
  
    return this.http.post(this.apiURL, post)  
  
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:string): Observable<any> {  
    return this.http.get(this.apiURL + '/' + id)
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: string, post: Post): Observable<any> {  
    return this.http.put(this.apiURL + '/' +id,post)   
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:string){
    return this.http.delete(this.apiURL + '/' + id)
  }      

}