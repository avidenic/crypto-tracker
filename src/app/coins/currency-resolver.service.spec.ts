import { async, TestBed } from '@angular/core/testing';
import { CurrencyService } from '@core/currency.service';
import { ActivatedRouteSnapshot, Router, NavigationExtras, RouterStateSnapshot } from '@angular/router';
import { CurrencyResolverService } from './currency-resolver.service';

describe('CurrencyResolverService', () => {
    let currencyResolverService: CurrencyResolverService;
    let router: Router;
    let currencyService: CurrencyService;
    let route: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                CurrencyService,
                {
                    provide: ActivatedRouteSnapshot,
                    useValue: {
                        queryParamMap: {
                            get: (): string => {
                                return '';
                            }
                        }
                    }
                },
                {
                    provide: Router,
                    useValue: {
                        navigate: (commands: any[], extras?: NavigationExtras): void => { }
                    }
                },
                {
                    provide: RouterStateSnapshot,
                    useValue: {}
                }
            ]
        }).compileComponents();
        currencyService = TestBed.get(CurrencyService);
        router = TestBed.get(Router);
        currencyResolverService = new CurrencyResolverService(router, currencyService);
        route = TestBed.get(ActivatedRouteSnapshot);
        state = TestBed.get(RouterStateSnapshot);
    }));

    it('should implement resolve', () => {
        expect(currencyResolverService.resolve).toBeDefined();
    });

    it('should return valid currency', () => {
        const usd = 'USD';
        spyOn(route.queryParamMap, 'get').and.returnValue(usd);
        currencyResolverService.resolve(route, state)
            .subscribe(x => {
                expect(x).toEqual(usd);
            });
    });

    it('should uppercase currency', () => {
        const usd = 'usd';
        spyOn(route.queryParamMap, 'get').and.returnValue(usd);
        currencyResolverService.resolve(route, state)
            .subscribe(x => {
                expect(x).toEqual(usd.toUpperCase());
            });
    });
});
