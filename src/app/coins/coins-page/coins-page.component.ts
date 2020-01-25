import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { Coin } from '../coins';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-coins-page',
  templateUrl: './coins-page.component.html',
  styleUrls: ['./coins-page.component.scss']
})
export class CoinsPageComponent implements OnInit {
  coins: Coin[];
  displayedColumns: string[] = ['cmcRank', 'symbol', 'price', 'percentChange24h'];
  selectedCurrency: string;
  ngOnInit(): void {
    this.route.queryParams.subscribe((data: { currency: string }) => {
      this.getCoins(data.currency);
    });
  }

  private getCoins(currency: string): void {
    this.selectedCurrency = currency;
    this.service.getCoins(currency).subscribe(coins => {
      this.coins = coins
    });
  }
  constructor(
    private service: CoinsService,
    private route: ActivatedRoute) { }
}
