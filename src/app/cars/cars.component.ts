import { Component } from '@angular/core';
import { CarsDataService } from '../cars-data.service';
import {HttpClientModule} from '@angular/common/http'; 

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {



  id:number = 0;
  cars: any[] = [];
  imagePaths: string[] = [
    '../../assets/Cimage2.png',
    '../../assets/Cimage3.png',
    '../../assets/Cimage4.png',
    '../../assets/Cimage1.png',
  ];

  constructor(private CarsDataService: CarsDataService ) {
    this.CarsDataService.getPosts().subscribe((res) => {

      console.log(res)
      this.cars = res.cars.map((car: any, index: number) => ({
          ...car,image: this.imagePaths[index % this.imagePaths.length] 
        }));


    });





  }}
