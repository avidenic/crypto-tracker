import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { Coin } from '../coins';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-coins-page',
  templateUrl: './coins-page.component.html',
  styleUrls: ['./coins-page.component.scss']
})
export class CoinsPageComponent implements OnInit {
  coins: Coin[];
  displayedColumns: string[] = ['refresh', 'cmcRank', 'symbol', 'price', 'percentChange24h'];
  selectedCurrency: string;

  constructor(
    private service: CoinsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.
      pipe(
        tap((data: { currency: string }) => {
          this.selectedCurrency = data.currency;
        })
      ).subscribe((data: { currency: string }) => {
        this.getCoins(data.currency);
      });
  }

  refresh(e: Event): void {
    this.getCoins(this.selectedCurrency);
  }

  private getCoins(currency: string): void {
    this.service.getCoins(currency).subscribe(coins => {
      this.coins = coins;
    });
  }
}
