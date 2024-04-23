// import { Component, OnInit } from '@angular/core';
// import { ProductsService, products } from '../products.service';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-injectibles',
//   standalone: true,
//   imports: [NgFor],
//   templateUrl: './injectibles.component.html',
//   styleUrl: './injectibles.component.css'
// })
// export class InjectiblesComponent implements OnInit {

//   // ps = new ProductsService();
//   products:products[] = [];
//   constructor(private ps: ProductsService) { }

//   ngOnInit(): void {
//     this.products = this.ps.getProducts();
//   }

// }

// Practical 15
import { Component, OnInit } from '@angular/core';
import { MajorcitiesService } from '../majorcities.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-injectibles',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './injectibles.component.html',
  styleUrl: './injectibles.component.css'
})

export class InjectiblesComponent implements OnInit {
  cities: any[] = [];
  newCity: any = {};

  constructor(private cityService: MajorcitiesService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getAllCities();
  }

  addCity(): void {
    this.cityService.addCity(this.newCity);
    this.newCity = {}; 
    this.cities = this.cityService.getAllCities();
  }
  deleteCity(index: number): void {
    this.cityService.deleteCity(index);
    this.cities = this.cityService.getAllCities();
  }

}
