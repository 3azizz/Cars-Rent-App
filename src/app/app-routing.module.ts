import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { AppDownloadComponent } from './app-download/app-download.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch: 'full'},
  {path:'home', component : HomeComponent , title: 'home page'},
  {path:'First-section', component : FirstSectionComponent , title: 'first section'},
  {path:'cards', component : CardsSectionComponent , title: 'cards'},
  {path:'rentapp', component : AppDownloadComponent , title: 'APP Download'},
  {path:'carss', component : CarsComponent},
  {path:'cardetails', component: CarDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
