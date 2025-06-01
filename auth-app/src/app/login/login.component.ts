import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
   imports: [FormsModule,RouterLink],
   styleUrl: './login.component.css',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private auth: AuthService) {}

  onLogin() { 
    const success = this.auth.login(this.email, this.password);
    if (!success) {
      alert('Invalid credentials');
    }
  }




}
