import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteMeetup {
  favorites: any[] = [];
  item: any;

  addToFavorites(item: any) {
    if (!this.favorites.some((i) => i.id === item.id)) {
      this.favorites.push(item);
    }
  }

  removeFromFavorite(item: any) {
    this.favorites = this.favorites.filter((i) => i.id !== item.id);
  }

  checkIfExist(item: any) {
    return this.favorites.some((i) => i.id === item.id);
  }

  getAllFavorites() {
    return this.favorites;
  }

  singleCard(item: any) {
    this.item = item;
  }

  getCard() {
    return this.item;
  }
}
