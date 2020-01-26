import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IListingsResponse, Coin, IQuotesResponse } from './coins';

@Injectable()
export class CoinsService {

  constructor(private client: HttpClient) { }

  getCoins(currency: string): Observable<Coin[]> {
    return this.client.get<IListingsResponse>('/v1/cryptocurrency/listings/latest',
      {
        params:
        {
          start: '1',
          limit: '100',
          convert: currency
        }
      }).pipe(
        map(response => response.data.map(c => new Coin(c)))
      );
  }

  getCoin(symbol: string, currency: string): Observable<Coin> {
    return this.client.get<IQuotesResponse>('/v1/cryptocurrency/quotes/latest',
      {
        params:
        {
          symbol,
          convert: currency
        }
      }).pipe(
        map(response => Object.entries(response.data).map(([_, value]) => new Coin(value))),
        map(coins => coins[0]) // as per api specs, it should be just one
      );
  }
}
