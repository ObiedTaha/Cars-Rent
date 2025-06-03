import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    center: true,
    margin: 0,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.3
      },
      740: {
        items: 1.4
      },
      940: {
        items: 1.5
      }
    },
    nav: false
  }
}
