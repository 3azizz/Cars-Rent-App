import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(public _HttpClient: HttpClient) { 


  }

  // json place holder link : https://jsonplaceholder.typicode.com/posts
  // cars apis link : https://myfakeapi.com/api/cars

  getPosts(): Observable<any>{
    return  this._HttpClient.get('https://myfakeapi.com/api/cars/')
  }

   getPostsbyID(id?: number): Observable<any> {
  return this._HttpClient.get(`https://myfakeapi.com/api/cars/${id}`);
}
}
