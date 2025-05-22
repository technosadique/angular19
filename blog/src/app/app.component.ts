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
selecteduser: Blog|undefined;
successMessage='';
constructor(private blogservice:BlogService){}


ngOnInit(){
this.blogservice.getusers().subscribe((data:Blog[])=>{
  this.blogdata=data
})
}



addUser(user:Blog){

if(!this.selecteduser){
  this.blogservice.saveUser(user).subscribe((data:Blog)=>{
  console.log(data);
  this.ngOnInit()
  this.successMessage="Added successfully"
  })
}
else{
    const prodData={...user,id:this.selecteduser.id}
this.blogservice.updateUser(prodData).subscribe((data)=>{
  if(data){
    this.ngOnInit()
    this.successMessage="Updated successfully"
  }  
  })
}
}


selectUser(id:string){
this.blogservice.selectSelectedUser(id).subscribe((data:Blog)=>{
  console.log(data);
  this.selecteduser=data
  })
}


deleteUser(id:string){
const confirmed=window.confirm("Are you sure to delete this record?");

if(confirmed){
  this.blogservice.deleteUser(id).subscribe((data:Blog)=>{
  if(data){
   this.ngOnInit()
     this.successMessage="Deleted successfully"
  } 
  })
}

}

}