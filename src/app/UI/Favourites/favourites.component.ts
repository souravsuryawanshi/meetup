import { Component, OnInit } from '@angular/core';
import { FavoriteMeetup } from 'src/app/Services/favorite-meetups.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favorites: any[] = [];
  constructor(private _meets: FavoriteMeetup) {}

  ngOnInit() {
    this.favorites = this._meets.getAllFavorites();
  }
}
