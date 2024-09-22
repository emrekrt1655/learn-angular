import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.module';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() complete = new EventEmitter<Todo>();

  onCompleteTodo = () => {
    this.complete.emit(this.todo);
  };
}
