import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports:[FormsModule,CommonModule]
})
export class UserComponent implements OnInit {
  users: any = [];
  user = { name: '', email: '' };
  editingId: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res) => this.users = res);
  }

  saveUser() {
    if (this.editingId) {
      this.userService.updateUser(this.editingId, this.user).subscribe(() => {
        this.editingId = null;
        this.user = { name: '', email: '' };
        this.loadUsers();
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        this.user = { name: '', email: '' };
        this.loadUsers();
      });
    }
  }

  editUser(user: any) {
    this.user = { ...user };
    this.editingId = user.id;
  }

  deleteUser(id: number) {

var cnf=window.confirm('r u sure to delete?');
if(cnf){
this.userService.deleteUser(id).subscribe(() => this.loadUsers());
}  

  }
}
