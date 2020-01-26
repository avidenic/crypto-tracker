import { async } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
    let currencyService: CurrencyService;

    beforeEach(async(() => {
        currencyService = new CurrencyService();
    }));

    it('should have default currency defined', () => {
        expect(currencyService.defaultCurrency).toBeDefined();
    });

    it('should have at least 1 valid currency', () => {
        expect(currencyService.validCurrencies).toBeDefined();
        expect(currencyService.validCurrencies.length).toBeGreaterThan(0);
    });

    it('should validate the default currency', () => {
        expect(currencyService.isValid).toBeDefined();
        expect(currencyService.isValid(currencyService.defaultCurrency)).toBeTruthy();
    });

    ['', 'abc', '1', '%'].forEach(value => {
        it(`should return false for ${value}`, () => {
            expect(currencyService.isValid(value)).toBeFalsy();
        });
    });
});
