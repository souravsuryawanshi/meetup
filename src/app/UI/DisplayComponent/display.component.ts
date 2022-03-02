import { Component, Input } from '@angular/core';
import { LoginStatus } from 'src/app/Services/login-status.service';
import { FavoriteMeetup } from 'src/app/Services/favorite-meetups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  @Input() item: any;

  constructor(
    private _meets: FavoriteMeetup,
    private _log: LoginStatus,
    private _route: Router
  ) {}

  addFavoriteHandler() {
    if (!this._log.getLoginStatus()) {
      this._route.navigateByUrl('login');
    } else {
      this._meets.addToFavorites(this.item);
    }
  }

  removeFromFavorites() {
    this._meets.removeFromFavorite(this.item);
  }

  checkIfExist() {
    return this._meets.checkIfExist(this.item);
  }
}
