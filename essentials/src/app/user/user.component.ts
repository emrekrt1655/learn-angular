import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // get imagePath() : string {
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  //imagePath = computed(() => this.selectedUser().avatar )

  onSelect() {
    this.select.emit(this.id);
  }
}
