import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'angular19users';

  getAllUsers(): User[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  getUserById(id: number): User | undefined {
    return this.getAllUsers().find(user => user.id === id);
  }

  addUser(user: User): void {
    const users = this.getAllUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(updatedUser: User): void {
    let users = this.getAllUsers();
    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: number): void {
    const users = this.getAllUsers().filter(user => user.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  clearUsers(): void {
    localStorage.removeItem(this.storageKey);
  }
}
