import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./UI/page-not-found/page-not-found.component";
import {ForumComponent} from "./UI/pages/forum/forum.component";
import {PlantDetailsComponent} from "./UI/pages/home-page/plant-details/plant-details.component";
import {ProfileComponent} from "./UI/pages/profile/profile.component";
import {SignUpComponent} from "./UI/pages/login/sign-up/sign-up.component";
import {SignInComponent} from "./UI/pages/login/sign-in/sign-in.component";
import {HomePageComponent} from "./UI/pages/home-page/home-page.component";


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomePageComponent},
  { path: 'sign-in', component:SignInComponent},
  { path: 'sign-up', component:SignUpComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'plant/:id', component:PlantDetailsComponent},
  { path: 'forum', component:ForumComponent},

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
