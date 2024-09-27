import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent  {
  // users: User[] = [];
  // selectedUser?: User;

  // constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.loadUsers();
  // }

  // loadUsers(): void {
  //   this.userService.getUsers().subscribe({
  //     next: (users) => {
  //       this.users = users;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching users', err);
  //     },
  //   });
  // }

  // getUser(id: number): void {
  //   this.userService.getUser(id).subscribe({
  //     next: (user) => {
  //       this.selectedUser = user;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching user', err);
  //     },
  //   });
  // }

}
