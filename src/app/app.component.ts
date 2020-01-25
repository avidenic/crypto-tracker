import { Component } from '@angular/core';
import { CurrencyService } from '@core/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$: string;
  currencies: string[];
  selected: string;
  constructor(currencyService: CurrencyService) {
    this.currencies = currencyService.validCurrencies;
    this.selected = currencyService.defaultCurrency;
    this.theme$ = 'default-theme';
  }
}
