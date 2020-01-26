import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CurrencyService } from '@core/currency.service';
import { Observable, of, EMPTY } from 'rxjs';

@Injectable()
export class CurrencyResolverService implements Resolve<string> {

    constructor(
        private router: Router,
        private currencyService: CurrencyService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Observable<never> {
        const id = route.queryParamMap.get('currency');

        // if valid currency is supplied, return it
        if (this.currencyService.isValid(id)) {
            return of(id.toUpperCase());
        }
        // force the default currency
        this.router.navigate([], {
            queryParams: {
                currency: this.currencyService.defaultCurrency
            },
            queryParamsHandling: 'merge'
        });
        return EMPTY;
    }
}
