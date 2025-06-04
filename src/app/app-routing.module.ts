import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CaridComponent } from './components/carid/carid.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: LayoutComponent},
  {path:'cars',component: CarsPageComponent},
  {path:'carsPage',component: CarsPageComponent},
  {path:'carId',component: CaridComponent},
  
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
