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
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PopularCarsComponent } from './components/popular-cars/popular-cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/button/button.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarTypeComponent } from './components/car-type/car-type.component';
import { IconComponent } from './components/icon/icon.component';
import { RouterModule, Routes } from '@angular/router';
import { DowenloadAppComponent } from './components/dowenload-app/dowenload-app.component';
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
    
    FooterComponent,
    NotFoundComponent,
    CarDetailsComponent,
    CarsPageComponent,
    SearchBarComponent,
    PopularCarsComponent,
    ButtonComponent,
    CarTypeComponent,
    IconComponent,
    DowenloadAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
