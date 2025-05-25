import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Blog } from '../blog';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  selectedblog: Blog | undefined
  successMessage = ''
  constructor(private blogservice: BlogService, private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }
  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.blogservice.findblog(this.id).subscribe((data: any) => {
      this.selectedblog = data;
    });


  }

  saveblog(blog: Blog) {
    this.blogservice.updateblog(this.id, blog).subscribe((data: any) => {
      this.messageService.setMessage('Blog updated successfully!');
      this.router.navigate(['/index']);
    })
  }

}
