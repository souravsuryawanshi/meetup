import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus } from 'src/app/Services/login-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login_status: boolean = false;
  constructor(private _log: LoginStatus, private _router: Router) {}

  ngOnInit(): void {
    this._listener();
    // this.login_status = this._log.getLoginStatus();
    // this.login_status = localStorage.getItem('user_login_status') === 'true';
    // this._log.status.subscribe((res: any) => (this.login_status = res));
    // above line appended after localstorage
  }

  private _listener() {
    this._log.status.subscribe((res: any) => (this.login_status = res));
    this.login_status = this._log.getLoginStatus();
  }

  navigateLogin(item: boolean) {
    this._router.navigateByUrl('/login');
  }

  navigateHome(item: boolean) {
    this._log.logoutClicked();
    // this.login_status = this._log.getLoginStatus();
    this._router.navigateByUrl('all_meets');
  }

  addNewMeet(item: boolean) {
    this._router.navigateByUrl('add_new_meet');
  }

  navigateFavorite() {
    this._router.navigateByUrl('favourites');
  }

  displayAllMeet(item: boolean) {
    this._router.navigateByUrl('all_meets');
  }
}
