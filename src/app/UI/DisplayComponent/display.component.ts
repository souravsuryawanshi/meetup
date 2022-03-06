import { Component, OnInit, Input } from '@angular/core';
import { LoginStatus } from 'src/app/Services/login-status.service';
import { FavoriteMeetup } from 'src/app/Services/favorite-meetups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() item: any;
  @Input() single: boolean = false;
  flag = false;
  constructor(
    private _meets: FavoriteMeetup,
    private _log: LoginStatus,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this._log.status.subscribe((res: any) => (this.flag = res));
  }

  addFavoriteHandler() {
    if (!this._log.getLoginStatus()) {
      this._route.navigateByUrl('login');
    } else {
      this._meets.addToFavorites(this.item);
    }
  }

  removeFromFavorites() {
    this._meets.removeFromFavorite(this.item);

    if (this._route.url === '/favourites') {
      this._route
        .navigateByUrl('refresh', { skipLocationChange: true })
        .then(() => {
          this._route.navigateByUrl('favourites');
        });
    }
  }

  checkIfExist() {
    this.flag = this._log.getLoginStatus();
    return this._meets.checkIfExist(this.item);
  }

  displaySingleCard() {
    let id = this.item.id;
    id = id.substring(1);
    this._meets.singleCard(this.item);
    this._route.navigateByUrl('all_meets/' + id);
  }
}
