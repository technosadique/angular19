import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-index',

  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  posts: Post[] = [];
  successMessage = ''
  isAuthenticated: boolean | undefined;


  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService, private messageService: MessageService, private router: Router) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit() {
    this.successMessage = this.messageService.getMessage();
    if (this.successMessage) {
      setTimeout(() => this.successMessage = '', 3000);
    }
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this record?');
    if (confirmed) {
      this.messageService.setMessage('Post deleted successfully!');
      this.postService.delete(id).subscribe((data) => {
        if (data) {
          //alert('Post deleted successfully');
          this.ngOnInit()
        }
      })
    }
  }


  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}