import { Routes, RouterModule } from '@angular/router';
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { ModuleWithProviders } from '@angular/core';
import { CurrencyResolverService } from './currency-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CoinsPageComponent,
    resolve: {
      currency: CurrencyResolverService
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
