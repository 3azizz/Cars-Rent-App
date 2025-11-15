import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';   
import { CarsDataService } from '../cars-data.service';
import { Cars } from '../cars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.css']
})
export class CardsSectionComponent {



  cars: any[] = [];
  imagePaths: string[] = [
    '../../assets/Cimage2.png',
    '../../assets/Cimage3.png',
    '../../assets/Cimage4.png',
    '../../assets/Cimage1.png'
  ];

  constructor(private CarsDataService: CarsDataService ) {
    this.CarsDataService.getPosts().subscribe((res) => {
      this.cars = res.cars.slice(0, 4).map((car: any, index: number) => ({
          ...car,image: this.imagePaths[index] 
        }));
    });





  }

  
   

}
