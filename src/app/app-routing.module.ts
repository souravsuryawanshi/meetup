import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AddMeetupComponent,
  AllMeetupComponent,
  FavouritesComponent,
  LoginFormComponent,
  PageErrorComponent,
  SingleCard,
  DummyComponent,
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
    path: 'refresh',
    component: DummyComponent,
  },
  {
    path: 'add_new_meet',
    component: AddMeetupComponent,
  },
  {
    path: 'all_meets',
    component: AllMeetupComponent,
  },
  {
    path: 'all_meets/:id',
    component: SingleCard,
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
