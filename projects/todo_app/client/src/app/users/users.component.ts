import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, UserComponent, TodosComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  selectedUserId?: number;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.error('Error fetching users', err);
      },
    });
  }

  onSelectUser(id: number) {
    this.selectedUserId = id
  }

}
