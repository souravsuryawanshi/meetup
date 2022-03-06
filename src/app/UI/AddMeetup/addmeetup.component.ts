import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';
import { LoginStatus } from 'src/app/Services/login-status.service';

@Component({
  selector: 'app-add_meetup',
  templateUrl: './addmeetup.component.html',
  styleUrls: ['./addmeetup.component.scss'],
})
export class AddMeetupComponent {
  receivedError: string = '';
  loading: boolean = false;

  constructor(
    private _route: Router,
    private _http: HttpClient,
    private _log: LoginStatus
  ) {}

  address = {
    placeholder: 'Enter Address',
    name: 'address',
    value: '',
    disable: false,
    type: 'text',
    validated: true,
    empty: false,
    isValid: function () {
      let result = true;

      if (this.value.trim().length < 1) {
        this.errorMessage = 'Address cannot empty!';
        result = false;
      }
      this.validated = result;
      this.disable = !result;
      if (result) this.empty = false;
    },

    errorMessage: 'Address is required',
  };

  description = {
    placeholder: 'Description',
    name: 'description',
    value: '',
    type: 'text',
    disable: false,
    empty: false,
    isValid: function () {
      let result = true;
      if (this.value.trim().length < 1) {
        this.errorMessage = 'Description is required!';
        result = false;
      }
      this.validated = result;
      this.disable = !result;
      if (result) this.empty = false;
    },

    validated: true,
    errorMessage: 'Description is required',
  };

  image = {
    placeholder: 'Image Url',
    name: 'image',
    value: '',
    type: 'text',
    disable: false,
    empty: false,
    isValid: function () {
      let result = true;
      if (this.value.trim().length < 1) {
        this.errorMessage = 'Url is required!';
        result = false;
      }
      this.validated = result;
      this.disable = !result;
      if (result) this.empty = false;
    },

    validated: true,
    errorMessage: 'Url is required',
  };

  title = {
    placeholder: 'Title',
    name: 'title',
    value: '',
    type: 'text',
    disable: false,
    empty: false,
    isValid: function () {
      let result = true;
      if (this.value.trim().length < 1) {
        this.errorMessage = 'Title is required!';
        result = false;
      }
      this.validated = result;
      this.disable = !result;
      if (result) this.empty = false;
    },

    validated: true,
    errorMessage: 'Title is required',
  };

  onSubmit() {
    if (
      this.address.value.length < 1 &&
      this.description.value.length < 1 &&
      this.image.value.length < 1 &&
      this.title.value.length < 1
    ) {
      this.address.empty = true;
      this.description.empty = true;
      this.image.empty = true;
      this.title.empty = true;
    } else if (this.address.value.length < 1) {
      this.address.empty = true;
    } else if (this.description.value.length < 1) {
      this.description.empty = true;
    } else if (this.image.value.length < 1) {
      this.image.empty = true;
    } else if (this.title.value.length < 1) {
      this.title.empty = true;
    } else if (
      this.address.validated &&
      this.description.validated &&
      this.image.validated &&
      this.title.validated
    ) {
      this.loading = true;
      this._http
        .post(
          'https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
          {
            address: this.address.value,
            description: this.description.value,
            image: this.image.value,
            title: this.title.value,
          }
        )
        .pipe(take(1))
        .subscribe(
          (response: any) => {
            this.loading = false;
            console.log(response.token);

            this._route.navigateByUrl('');
          },
          (error) => {
            this.loading = false;
            this.receivedError = error.error.error;
          }
        );
    }
  }
}
