import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginStatus } from './Services/login-status.service';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteMeetup } from './Services/favorite-meetups.service';
import {
  HeaderComponent,
  FooterComponent,
  AddMeetupComponent,
  AllMeetupComponent,
  FavouritesComponent,
  LoginFormComponent,
  PageErrorComponent,
  LinksComponent,
  DisplayComponent,
  InputComponent,
  LoginComponent,
} from './UI';

export const components = [
  AppComponent,
  HeaderComponent,
  AllMeetupComponent,
  AddMeetupComponent,
  FavouritesComponent,
  LoginFormComponent,
  FooterComponent,
  PageErrorComponent,
  LinksComponent,
  InputComponent,
  LoginComponent,
  DisplayComponent,
];

export const bootstrap = [AppComponent];

export const imports = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
];

export const providers = [LoginStatus, FavoriteMeetup];
