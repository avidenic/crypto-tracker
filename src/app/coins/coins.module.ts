import { NgModule } from '@angular/core';
import { CoinsService } from './coins.service';
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { routing } from './coins-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/auth-interceptor';
import { MatTableModule, MatCardModule } from '@angular/material';

@NgModule({
  providers: [
    CoinsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  declarations: [CoinsPageComponent],
  imports: [
    routing,
    HttpClientModule,
    MatTableModule,
    MatCardModule
  ],
  entryComponents: [CoinsPageComponent]
})
export class CoinsModule { }
