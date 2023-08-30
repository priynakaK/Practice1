import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MiddleComponent, FooterComponent, HeaderComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
