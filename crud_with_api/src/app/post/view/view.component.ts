import { Component } from '@angular/core';

import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  id!: number;
  post!: Post;
  isAuthenticated: boolean | undefined;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;
    });
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}