import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isAuthenticated = false;
  constructor(private router: Router) {}

   signup(user: any) {
    localStorage.setItem(user.email, JSON.stringify(user));
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }

   login(email: string, password: string): boolean {
    const stored = localStorage.getItem(email);
 
     localStorage.setItem('token','dummy-token'); // Store token
    if (!stored) return false;

    const user = JSON.parse(stored);
    if (user.password === password) {
      localStorage.setItem('userEmail', user.email);
      this.isAuthenticated = true;
      this.router.navigate(['/index']);
      return true;
    }
    return false;
  }

  logout() { 
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }


}
