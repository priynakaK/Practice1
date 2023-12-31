import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppComponent],
  template: `
        <app-app></app-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
