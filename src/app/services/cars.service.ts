import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient ) { }

  getLimitCars():Observable<any>{
    return this.http.get(`https://freetestapi.com/api/v1/cars`);
  }
}
