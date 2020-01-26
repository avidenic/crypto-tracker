import { OnInit, Component } from '@angular/core';
import { CoinsService } from '../coins.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Coin } from '../coins';

@Component({
    selector: 'app-coin-details-page',
    templateUrl: './coin-detail-page.component.html',
    styleUrls: ['./coin-detail-page.component.scss']
})
export class CoinDetailsPageComponent implements OnInit {

    symbol: string;
    currency: string;
    coin$: Observable<Coin>;
    btcSymbol = 'BTC';
    basicStatsColumns = ['price', 'volume24h', 'marketCap'];
    changesColumns = ['change1h', 'change24h', 'change7d'];

    constructor(
        private service: CoinsService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        // when either changes
        combineLatest(
            this.route.params,
            this.route.queryParams
        ).pipe(
            // map to expected values
            map(([param, query]) => {
                return {
                    symbol: param.symbol,
                    currency: query.currency
                };
            }),
            tap((data: { symbol: string, currency: string }) => {
                this.symbol = data.symbol;
                this.currency = data.currency;
            })
        ).subscribe((data: { symbol: string, currency: string }) => {
            // if we have everything, try to get values from backend
            if (data.symbol && data.currency) {
                this.getCoin(data.symbol, data.currency);
            }
        });
    }

    refresh(e: Event): void {
        e.preventDefault();
        this.getCoin(this.symbol, this.currency);
    }

    private getCoin(symbol: string, currency: string): void {
        // free plan does not allow more than 1 convert at the time, so we have to make 2 requests :(
        this.coin$ = forkJoin(
            this.service.getCoin(symbol, currency),
            this.service.getCoin(symbol, this.btcSymbol)
        ).pipe(
            map(([inCurrency, inBtc]) => {
                const coin = inCurrency;
                coin.quote[this.btcSymbol] = inBtc.quote[this.btcSymbol];
                return coin;
            })
        );
    }
}
