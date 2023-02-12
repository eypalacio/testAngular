import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccesFormComponent } from './components/acces-form/acces-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './modal/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { CardMyorderComponent } from './components/card-myorder/card-myorder.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AccesFormComponent,
    RegisterFormComponent,
    LoginComponent,
    MenuComponent,
    CardComponent,
    CardMyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
