import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MessageService } from '../../message.service';
import { Post } from '../post';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id!: number;
  post!: Post;
  form!: FormGroup;
  successMessage = ''
  isAuthenticated: boolean | undefined;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService, private route: ActivatedRoute, private messageService: MessageService, private router: Router
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

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res: Post[]) => {
      this.messageService.setMessage('Post updated successfully!');
      this.router.navigateByUrl('post/index');
    })
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}