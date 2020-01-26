// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatToolbarModule } from '@angular/material/toolbar';

// 1st party
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// other 3rd party
import { MatMenuModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CurrencyService } from '@core/currency.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
