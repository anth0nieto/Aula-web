import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { IndexHomePageComponent } from './componentes/index-home-page/index-home-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    IndexHomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
