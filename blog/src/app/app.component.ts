import { Component } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

blogdata:Blog[]=[]
selectedblog: Blog|undefined;
successMessage='';
constructor(private blogservice:BlogService){}


ngOnInit(){
this.blogservice.getblogs().subscribe((data:Blog[])=>{
  this.blogdata=data
})
}



addBlog(blog:Blog){

if(!this.selectedblog){
  this.blogservice.saveBlog(blog).subscribe((data:Blog)=>{
  console.log(data);
  this.ngOnInit()
  this.successMessage="Added successfully"
  })
}
else{
    const prodData={...blog,id:this.selectedblog.id}
this.blogservice.updateUser(prodData).subscribe((data)=>{
  if(data){
    this.ngOnInit()
    this.successMessage="Updated successfully"
  }  
  })
}
}


selectBlog(id:string){
this.blogservice.find(id).subscribe((data:Blog)=>{
  console.log(data);
  this.selectedblog=data
  })
}


deleteBlog(id:string){
const confirmed=window.confirm("Are you sure to delete this record?");

if(confirmed){
  this.blogservice.deleteBlog(id).subscribe((data:Blog)=>{
  if(data){
   this.ngOnInit()
     this.successMessage="Deleted successfully"
  } 
  })
}

}

}