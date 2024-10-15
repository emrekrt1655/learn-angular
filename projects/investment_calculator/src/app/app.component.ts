import { Component, signal } from "@angular/core";
import { ResultData } from "./investment-input.model";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
})
export class AppComponent {
  resultsData = signal<ResultData[] | undefined>(undefined)
  
}
