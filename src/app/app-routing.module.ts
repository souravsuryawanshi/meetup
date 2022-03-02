import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AddMeetupComponent,
  AllMeetupComponent,
  FavouritesComponent,
  LoginFormComponent,
  PageErrorComponent,
} from './UI';

const routes: Routes = [
  {
    path: '',
    component: AllMeetupComponent,
  },

  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },

  {
    path: 'add_new_meet',
    component: AddMeetupComponent,
  },
  {
    path: '**',
    component: PageErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
