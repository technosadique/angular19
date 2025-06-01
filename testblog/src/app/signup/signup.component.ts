import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) {}

  onSignup() { 
    this.auth.signup(this.user);
  }
}
