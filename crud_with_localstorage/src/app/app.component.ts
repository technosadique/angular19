import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule,NgFor]
})
export class AppComponent implements OnInit {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getAllUsers();
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return;

    this.newUser.id = Date.now(); // simple unique ID
    this.userService.addUser(this.newUser);
    this.newUser = { id: 0, name: '', email: '' };
    this.loadUsers();
  }

  editUser(user: User) {
    this.newUser = { ...user };
  }

  updateUser() {
    if (!this.newUser.name || !this.newUser.email) return;

    this.userService.updateUser(this.newUser);
    this.newUser = { id: 0, name: '', email: '' };
    this.loadUsers();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.loadUsers();
  }

  clearAll() {
    this.userService.clearUsers();
    this.loadUsers();
  }

}
