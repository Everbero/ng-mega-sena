import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private localData: LocalStorageService) {}

  doAuth = (username: any, password: any) => {
    this.localData.authenticateUser(username, password);
  };

  checkAuth = () => {
    this.localData.checkAuth();
  };

  isAuthenticated() {
    return this.localData.checkAuth();
  }
  exitApp = () =>{
    this.localData.removeAuth();
  }
}
