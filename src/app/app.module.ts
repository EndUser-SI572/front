import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {HeaderComponent} from "./UI/header/header.component";
import {FooterComponent} from "./UI/footer/footer.component";
import {MainComponent} from "./UI/main/main.component";
import {ModelComponent} from "./UI/model/model.component";
import {PageNotFoundComponent} from "./UI/page-not-found/page-not-found.component";
import {AddPostComponent} from "./UI/pages/forum/add-post/add-post.component";
import {CreateCommentComponent} from "./UI/pages/forum/create-comment/create-comment.component";
import {PostDetailComponent} from "./UI/pages/forum/post-detail/post-detail.component";
import {PostListComponent} from "./UI/pages/forum/post-list/post-list.component";
import {ForumComponent} from "./UI/pages/forum/forum.component";
import {FormAddPlantComponent} from "./UI/pages/home-page/form-add-plant/form-add-plant.component";
import {FormEditPlantComponent} from "./UI/pages/home-page/form-edit-plant/form-edit-plant.component";
import {HumidityComponent} from "./UI/pages/home-page/humidity/humidity.component";
import {PlantDetailsComponent} from "./UI/pages/home-page/plant-details/plant-details.component";
import {PlantsListComponent} from "./UI/pages/home-page/plants-list/plants-list.component";
import {TemperatureComponent} from "./UI/pages/home-page/temperature/temperature.component";
import {HomePageComponent} from "./UI/pages/home-page/home-page.component";
import {MessageSuccesfullComponent} from "./UI/pages/login/message-succesfull/message-succesfull.component";
import {SignInComponent} from "./UI/pages/login/sign-in/sign-in.component";
import {SignUpComponent} from "./UI/pages/login/sign-up/sign-up.component";
import {ProfileComponent} from "./UI/pages/profile/profile.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ToastrModule} from "ngx-toastr";
import {InterceptorService} from "../services/InterceptorService";
import {WebSocketService} from "../services/WebSocketService";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ModelComponent,
    PageNotFoundComponent,
    AddPostComponent,
    CreateCommentComponent,
    PostDetailComponent,
    PostListComponent,
    ForumComponent,
    FormAddPlantComponent,
    FormEditPlantComponent,
    HumidityComponent,
    PlantDetailsComponent,
    PlantsListComponent,
    TemperatureComponent,
    HomePageComponent,
    MessageSuccesfullComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    RouterOutlet,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
