import { Routes, RouterModule } from "@angular/router";
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CoinsPageComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
