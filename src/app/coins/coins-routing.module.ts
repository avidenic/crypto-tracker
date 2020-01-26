import { Routes, RouterModule } from '@angular/router';
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { ModuleWithProviders } from '@angular/core';
import { CurrencyResolverService } from './currency-resolver.service';
import { CoinDetailsPageComponent } from './coin-details-page/coin-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoinsPageComponent,
    resolve: {
      currency: CurrencyResolverService
    }
  },
  {
    path: ':symbol',
    component: CoinDetailsPageComponent,
    resolve: {
      currency: CurrencyResolverService
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
