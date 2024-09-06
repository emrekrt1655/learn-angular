import { Component, computed, input, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) name!: string;
  // @Input({required: true}) avatar!: string;

  avatar = input.required<string>();
  name = input.required<string>();
  
  

  // get imagePath() : string {
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  //imagePath = computed(() => this.selectedUser().avatar )

  onSelectUser() {
    console.log(this.avatar)
  }


}
