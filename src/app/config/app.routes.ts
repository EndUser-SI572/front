import { Routes } from '@angular/router';
import {SignInComponent} from "../UI/pages/login/sign-in/sign-in.component";
import {SignUpComponent} from "../UI/pages/login/sign-up/sign-up.component";
import {PageNotFoundComponent} from "../UI/page-not-found/page-not-found.component";
import {ProfileComponent} from "../UI/pages/profile/profile.component";
import { ForumComponent} from "../UI/pages/forum/forum.component";
import {PlantDetailsComponent} from "../UI/pages/home-page/plant-details/plant-details.component";
import {HomePageComponent} from "../UI/pages/home-page/home-page.component";


export const routes: Routes = [
  { path: '', redirectTo: 'enduser', pathMatch: 'full' },
  { path: 'enduser', component: SignInComponent },
  { path: 'login/sign-in', component: SignInComponent },
  { path: 'login/sign-up', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'plant/:id', component: PlantDetailsComponent},
  {
    path: 'home',
    loadComponent:() => import('../UI/pages/home-page/home-page.component')
      .then((c)=>c.HomePageComponent)
  },
  { path: 'forum',
    loadComponent:() => import('../UI/pages/forum/forum.component')
      .then((c)=> c.ForumComponent)
  },
  { path: '**', component: PageNotFoundComponent }
];
