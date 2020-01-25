import { NgModule } from '@angular/core';
import { CoinsService } from './coins.service';
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { routing } from './coins-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@core/auth-interceptor';
import { MatTableModule, MatCardModule, MatIconModule } from '@angular/material';
import { CurrencyService } from '@core/currency.service';
import { CurrencyResolverService } from './currency-resolver.service';
import { CoinDetailsPageComponent } from './coin-details-page/coin-detail-page.component';

@NgModule({
  providers: [
    CoinsService,
    CurrencyService,
    CurrencyResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  declarations: [CoinsPageComponent, CoinDetailsPageComponent],
  imports: [
    routing,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ],
  entryComponents: [CoinsPageComponent]
})
export class CoinsModule { }
