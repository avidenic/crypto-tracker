import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CurrencyService } from '@core/currency.service';
import { Observable, of, EMPTY } from 'rxjs';

@Injectable()
export class CurrencyResolverService implements Resolve<string> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Observable<never> {
        let id = route.queryParamMap.get('currency');
        
        if (this.currencyService.isValid(id)) {
            return of(id.toUpperCase());
        }
        this.router.navigate([], {
            queryParams: {
                currency: this.currencyService.defaultCurrency
            }
        });
        return EMPTY;
    }

    constructor(private router: Router, private currencyService: CurrencyService) { }
}