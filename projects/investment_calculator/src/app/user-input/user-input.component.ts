import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output()  calculate = new EventEmitter<Data>();

  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '0';
  enteredDuration: string = '0';

  onSubmit() {
   this.calculate.emit({
    initialInvestment: +this.enteredInitialInvestment,
    duration: +this.enteredDuration,
    expectedReturn: +this.enteredExpectedReturn,
    annualInvestment: +this.enteredAnnualInvestment
   })  
  }
}
