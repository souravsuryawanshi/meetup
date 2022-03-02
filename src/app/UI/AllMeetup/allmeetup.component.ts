import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { LoginStatus } from 'src/app/Services/login-status.service';

@Component({
  selector: 'app-all_meetup',
  templateUrl: './allmeetup.component.html',
  styleUrls: ['./allmeetup.component.scss'],
})
export class AllMeetupComponent {
  data: any[] = [];
  loading: boolean = false;
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getMeets();
  }

  private getMeets() {
    this.loading = true;
    this._http
      .get(
        'https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          for (let i in res) {
            res[i].id = i;
            this.data.push(res[i]);
          }
        },
        () => (this.loading = false)
      );
  }
}
