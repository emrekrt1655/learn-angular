import { Component } from '@angular/core';
import { Todo } from './todo/todo.module';
import { DUMMY_TODOS } from './todos';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: Todo[] =  DUMMY_TODOS;

  onCompleteTodo(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted
  }
}
