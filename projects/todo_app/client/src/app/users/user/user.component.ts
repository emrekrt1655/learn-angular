import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService, type User } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser?: User;
  @Input() user!: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  getUser(id: number): void {
    this.userService.getUser(id).subscribe({
      next: (user) => {
        this.selectedUser = user;
      },
      error: (err) => {
        console.error('Error fetching user', err);
      },
    });
  }

  onSelect() {
    this.select.emit(this.user.id);
  }
}
