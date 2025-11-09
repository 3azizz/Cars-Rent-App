import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NvbarComponent } from './nvbar/nvbar.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { AppDownloadComponent } from './app-download/app-download.component';
import { FooterComponent } from './footer/footer.component';   

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NvbarComponent,
    FirstSectionComponent,
    CardsSectionComponent,
    AppDownloadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
