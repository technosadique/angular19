import { Component } from '@angular/core';
  
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MatTableModule,
    MatToolbarModule,
    MatButtonModule,MatCardModule,MatIconModule,RouterModule,MatFormFieldModule,MatInputModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  
  id!: string;
  post!: Post;
      
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
          
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
  
}