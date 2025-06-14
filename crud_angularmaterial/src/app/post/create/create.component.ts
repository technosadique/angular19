import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { MessageService } from '../../message.service';
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
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatTableModule,
    MatToolbarModule,
    MatButtonModule,MatCardModule,MatIconModule,RouterModule,MatFormFieldModule,MatInputModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private router: Router,
	private messageService: MessageService
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      age: new FormControl('', Validators.required),
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
    this.postService.create(this.form.value).subscribe((res:any) => {
         this.messageService.setMessage('Post created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
  
}