import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
 imports: [RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    loggedInUser: string | null = null;
    user= {name: 'Admin'};
isAuthenticated:boolean=false

  ngOnInit(): void {   
    localStorage.setItem('currentUser', this.user.name);
    this.loggedInUser = localStorage.getItem('currentUser');
  }
constructor(private router:Router){}

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
