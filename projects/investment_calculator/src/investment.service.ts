import {Injectable, signal} from '@angular/core'
import { Data } from '@angular/router';
import { ResultData } from './app/investment-input.model';

@Injectable({providedIn: 'root'})
export class InvestmentService {
    //resultsData? : ResultData[];
    resultsData = signal<ResultData[] | undefined>(undefined);
   calculateInvestmentResults(data: Data) {
        const annualData = [];
        const { initialInvestment, expectedReturn, annualInvestment, duration } =
          data;
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
        this.resultsData.set(annualData);
        //this.resultsData = annualData;
      }
}