import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { Coin } from '../coins';

@Component({
  selector: 'app-coins-page',
  templateUrl: './coins-page.component.html',
  styleUrls: ['./coins-page.component.scss']
})
export class CoinsPageComponent implements OnInit {
  coins: Coin[];
  displayedColumns: string[] = ['name', 'id', 'symbol', 'slug', 'totalSupply'];
  ngOnInit(): void {
    this.service.getCoins().subscribe(coins => {
      this.coins = coins;
    });
  }
  constructor(private service: CoinsService) { }
}
