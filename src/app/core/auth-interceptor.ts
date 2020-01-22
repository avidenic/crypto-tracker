import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coinmarketcap } from '@environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private apiKey: string;
  constructor() {
    this.apiKey = coinmarketcap.apiKey;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-CMC_PRO_API_KEY': this.apiKey,
        'Accept': 'application/json'
      }
    });
    return next.handle(req);
  }
}
