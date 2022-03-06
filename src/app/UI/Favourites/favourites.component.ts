import { LoginStatus } from 'src/app/Services/login-status.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteMeetup } from 'src/app/Services/favorite-meetups.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(
    private _meets: FavoriteMeetup,
    private _log: LoginStatus,
    private _route: Router
  ) {}

  ngOnInit() {
    if (!this._log.getLoginStatus()) {
      this._route.navigateByUrl('login');
    }
    this.favorites = this._meets.getAllFavorites();
  }
}
