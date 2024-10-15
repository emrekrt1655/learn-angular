import { Component, input, Input } from '@angular/core';
import { ResultData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
 // @Input() results?: ResultData[];
 results = input<ResultData[]>();
}
