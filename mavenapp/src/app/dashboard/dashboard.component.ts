import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
 
  constructor() {
    
   }

  

 
  //users = ['John', 'Benedict', 'Margaret', 'Linda'];
  users:any[]=[
   {status:'DEPOSIT',name:'Chris',cost:'$443',image:'assets/chris.png'},
   {status:'CONCLUSION',name:'Benedict',cost:'-$123',image:'assets/mark.jpg'},
   {status:'DEPOSIT',name:'Margaret',cost:'$443',image:'assets/mark.jpg'},
   {status:'CONCLUSION',name:'Linda',cost:'-$254',image:'assets/linda.jpg'},
   
   
   
   {status:'DEPOSIT',name:'Mark',cost:'$234',image:'assets/mark.jpg'},
   {status:'CONCLUSION',name:'Rechardo',cost:'-$124',image:'assets/mark.jpg'}
  ];  


  userrevenue:any[]=[
  {title:'Montenegro',revper:'50%'},
  {title:'Bouvet Island (Bouvet)',revper:'60%'},
  {title:'Cape Verde',revper:'50%'},
  {title:'Bulgaria',revper:'80%'},
  {title:'Libyan Arab',revper:'50%'},

  ];


}
