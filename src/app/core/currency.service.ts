import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {
    defaultCurrency = 'USD';
    validCurrencies = [this.defaultCurrency, 'EUR', 'CNY'];

    isValid(value: string): boolean {
        return value && this.validCurrencies.indexOf(value.toUpperCase()) > -1;
    }
}
