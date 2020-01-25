import { OnInit, Component } from '@angular/core';
import { CoinsService } from '../coins.service';
import { ActivatedRoute, Params } from '@angular/router';
import { zip, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coin } from '../coins';

@Component({
    selector: 'app-coin-details-page',
    templateUrl: './coin-detail-page.component.html',
    styleUrls: ['./coin-detail-page.component.scss']
})
export class CoinDetailsPageComponent implements OnInit {
    symbol: string;
    currency: string;
    coin: Coin; 
    btcSymbol = 'BTC';

    ngOnInit(): void {
        zip(
            this.route.params,
            this.route.queryParams
        ).pipe(
            map(([param, query]) => {
                return {
                    symbol: param.symbol,
                    currency: query.currency
                };
            })
        ).subscribe((data: { symbol: string, currency: string }) => {
            this.symbol = data.symbol;
            this.currency = data.currency;
            this.getCoin(data.symbol, data.currency);
        });
    }

    refresh(): void {
        this.getCoin(this.symbol, this.currency);
    }

    private getCoin(symbol: string, currency: string): void {
        // free plan does not allow more than 1 convert at the time, so we have to make 2 requests :(
        forkJoin(
            this.service.getCoin(symbol, currency),
            this.service.getCoin(symbol, this.btcSymbol)
        ).subscribe(([inCurrency, inBtc]) => {            
            this.coin = inCurrency;
            this.coin.quote[this.btcSymbol] = inBtc.quote[this.btcSymbol]; // add just btc quote, the rest should be the same
        })
    }

    constructor(
        private service: CoinsService,
        private route: ActivatedRoute) { }
}