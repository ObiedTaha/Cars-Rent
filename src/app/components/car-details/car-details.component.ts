import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  constructor(private carsService: CarsService) { }


  // ngOnInit(): void {
  //   this.getlimits();
  // }
  
  // getlimits() {
  //   this.carsService.getLimitCars().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }
}
