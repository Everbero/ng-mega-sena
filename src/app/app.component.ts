import { Component, OnInit, isDevMode } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService){

  }

  exitApp(){
    this.authService.exitApp();
    window.location.reload();
  }

  checkAuth(){
    return this.authService.isAuthenticated();
  }
  title = 'ng-mega-sena';
  isDev = isDevMode();

  ngOnInit(): void {
    this.checkAuth()
  }
}
