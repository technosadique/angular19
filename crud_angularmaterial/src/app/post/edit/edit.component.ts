import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../message.service';
import { Post } from '../post';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
  
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatTableModule,
    MatToolbarModule,
    MatButtonModule,MatCardModule,MatIconModule,RouterModule,MatFormFieldModule,MatInputModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  
  id!: string;
  post!: Post;
  form!: FormGroup;
  successMessage = ''
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
	private messageService: MessageService,
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
        
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required,Validators.email]),
      age: new FormControl('', Validators.required)
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
         this.messageService.setMessage('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
  
}