import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';   
import { CarsDataService } from '../cars-data.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.css']
})
export class CardsSectionComponent {

  cars: Cars[] =[];

  constructor(private CarsDataService : CarsDataService){
    
    this.CarsDataService.getPosts().subscribe((res)=>{

      console.log(res);
      this.cars = res
    });
  }

}
