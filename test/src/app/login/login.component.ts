import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any={
    email:'',
    password:''
  };
isAuthenticated:boolean=false;
  // email = '';
  // password = '';

http=inject(HttpClient);
router=inject(Router);
auth=inject(AuthService);
onLogin(){
 // debugger;

if(this.loginObj.email=='admin@test.com' && this.loginObj.password=='123456'){
this.isAuthenticated = true;
localStorage.setItem('token','dummy-token'); // Store token
this.router.navigate(['/home']);
}
else{
  alert('Invalid credentials');
}
}
}
