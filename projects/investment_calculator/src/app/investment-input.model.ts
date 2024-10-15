export interface Data {
  initialInvestment: number;
  expectedReturn: number;
  annualInvestment: number;
  duration: number;
}

export interface ResultData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
