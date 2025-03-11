import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { RentComponent } from './components/rent/rent.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AppsComponent } from './components/apps/apps.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PopularCarsComponent } from './components/popular-cars/popular-cars.component';

import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LayoutComponent,
    CardDetailsComponent,
    RentComponent,
    ChooseUsComponent,
    TestimonialsComponent,
    AppsComponent,
    FooterComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    CarDetailsComponent,
    CarsPageComponent,
    SearchBarComponent,
    PopularCarsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
