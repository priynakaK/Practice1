import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FooterComponent, MiddleComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
