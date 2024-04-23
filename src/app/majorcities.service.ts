import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MajorcitiesService {
  private cities = [
    { name: 'Ahmedabad', pincode: '380001', state: 'Gujarat' },
    { name: 'Palakkad', pincode: '678001', state: 'Kerala' },
    { name: 'Thrissur', pincode: '680001', state: 'Kerala' },
    { name: 'Surat', pincode: '395001', state: 'Gujarat' },
    { name: 'Manali', pincode: '175131', state: 'Himachal Pradesh' },
    { name: 'Jaipur', pincode: '302001', state: 'Rajasthan' },
    { name: 'Kolkata', pincode: '700001', state: 'West Bengal' },
    { name: 'Chandigarh', pincode: '160017', state: 'Punjab' },
    { name: 'Bhubaneswar', pincode: '751001', state: 'Odisha' },
    { name: 'Hyderabad', pincode: '500001', state: 'Telangana' }
  ];
  
  constructor() { }

  getAllCities() {
    return this.cities;
  }

  addCity(city: any): void {
    this.cities.push(city);
  }

  deleteCity(index: number): void {
    if (index >= 0 && index < this.cities.length) {
      this.cities.splice(index, 1);
    }
  }

}
