import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '@core/currency.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme$: string;
  currencies: string[];
  selected: string;

  constructor(currencyService: CurrencyService, private route: ActivatedRoute) {
    this.currencies = currencyService.validCurrencies;
    this.theme$ = 'default-theme';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: { currency: string }) => {
      this.selected = data.currency;
    });
  }
}
