import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  blogdata:Blog[]=[]
  selectedblog:Blog|undefined

constructor(private blogservice: BlogService){}


ngOnInit(){
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
this.blogservice.deleteblog(id).subscribe((data:any)=>{
this.ngOnInit()
})
}

}
}
