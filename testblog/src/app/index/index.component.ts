import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { RouterLink } from '@angular/router';
import { MessageService } from '../message.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [RouterLink,NgIf],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  blogdata:Blog[]=[]
  selectedblog:Blog|undefined
  successMessage=''
constructor(private blogservice: BlogService,private messageService: MessageService){}


ngOnInit(){
  this.successMessage = this.messageService.getMessage();
  if (this.successMessage) {
    setTimeout(() => this.successMessage = '', 3000);
  }

  this.blogservice.getblog().subscribe((data:Blog[])=>{
    this.blogdata=data
  })
}


findblog(id:string){
this.blogservice.findblog(id).subscribe((data:any)=>{
this.selectedblog=data

})
}


deleteblog(id:string){
const confirmed=window.confirm("Are you sure to delete this?");
if(confirmed){
this.messageService.setMessage('Blog deleted successfully!');
this.blogservice.deleteblog(id).subscribe((data:any)=>{
this.ngOnInit()
})
}

}
}
