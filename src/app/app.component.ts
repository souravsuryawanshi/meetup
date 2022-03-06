import { LoginStatus } from 'src/app/Services/login-status.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meetup';
  constructor(private _route: Router, private _log: LoginStatus) {}
  ngOnInit() {
    this._route.navigateByUrl('');
  }
}
