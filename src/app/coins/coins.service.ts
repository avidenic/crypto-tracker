import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICoinsResponse, Coin } from './coins';

@Injectable()
export class CoinsService {
  constructor(private client: HttpClient) {
  }

  getCoins(currency: string): Observable<Coin[]> {   
    return this.client.get<ICoinsResponse>('/v1/cryptocurrency/listings/latest',
      {
        params:
        {
          'start': '1',
          'limit': '100',
          'convert': currency
        }
      }).pipe(
        map(response => response.data.map(c => new Coin(c)))
      );
  }
}
