import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICoinsResponse, Coin } from './coins';

@Injectable()
export class CoinsService {
  constructor(private client: HttpClient) {
  }

  getCoins(): Observable<Coin[]> {
    return this.client.get<ICoinsResponse>('/v1/cryptocurrency/listings/latest')
      .pipe(
        map(response => response.data.map(c => new Coin(c)))
      );
  }
}
