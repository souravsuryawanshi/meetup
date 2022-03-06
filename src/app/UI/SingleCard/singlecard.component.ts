import { Component } from '@angular/core';
import { FavoriteMeetup } from 'src/app/Services/favorite-meetups.service';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.scss'],
})
export class SingleCard {
  item: any;
  constructor(
    private _meets: FavoriteMeetup // private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this._activeRoute.params.subscribe((res) => {
    //   const route = this._activeRoute.snapshot.paramMap.get('id');
    // });
    this.item = this._meets.getCard();
  }
}
