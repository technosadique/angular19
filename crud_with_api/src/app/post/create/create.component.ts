import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostService } from '../post.service';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from '../../message.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  form!: FormGroup;
  isAuthenticated: boolean | undefined;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService, private router: Router, private messageService: MessageService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
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
    this.postService.create(this.form.value).subscribe((res: Post[]) => {
      this.messageService.setMessage('Post created successfully!');
      this.router.navigateByUrl('post/index');
    })
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}