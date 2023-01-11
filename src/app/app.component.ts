import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-mega-sena';
  isDev = isDevMode();

  ngOnInit(): void {
  }
}
