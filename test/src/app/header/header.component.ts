import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    loggedInUser: string | null = null;
    user= {name: 'John Doe'};


  ngOnInit(): void {   
    localStorage.setItem('currentUser', this.user.name);
    this.loggedInUser = localStorage.getItem('currentUser');
  }
}
