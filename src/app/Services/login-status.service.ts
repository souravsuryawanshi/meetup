import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoginStatus {
  status = new Subject<boolean>();

  isUserLogin = false;

  onLoginSuccess(item: any) {
    if (item) {
      this.status.next(true);
      this.isUserLogin = true;
    }
  }

  logoutClicked() {
    this.status.next(false);
    this.isUserLogin = false;
  }

  getLoginStatus() {
    return this.isUserLogin;
  }
}
