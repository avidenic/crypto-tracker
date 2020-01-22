import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$: string;
  title = 'crypto-tracker';
  constructor() {
    this.theme$ = 'default-theme';
  }
}
