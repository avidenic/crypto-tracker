import { NgModule } from '@angular/core';
import { CoinsService } from './coins.service';
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { routing } from './coins-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@core/auth-interceptor';
import { MatTableModule } from '@angular/material';
import { CurrencyService } from '@core/currency.service';
import { CurrencyResolverService } from './currency-resolver.service';

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
  declarations: [CoinsPageComponent],
  imports: [
    routing,
    HttpClientModule,
    MatTableModule
  ],
  entryComponents: [CoinsPageComponent]
})
export class CoinsModule { }
