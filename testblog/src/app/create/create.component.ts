import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [FormsModule,RouterLink,NgIf],

  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  selectedblog: Blog | undefined

  constructor(private blogservice: BlogService, private router: Router) { }


  saveblog(blog: Blog) {

    this.blogservice.saveblog(blog).subscribe((data: Blog[]) => {
      this.router.navigate(['/index']);
    })

  }

}
