import { Injectable } from '@angular/core';
export interface products{
  id:number,
  name:string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  getProducts(): products[] {
    return [
      {id:1, name:'Mobile' },
      {id:2, name:'Laptop'},
      {id:3, name:'Earphones'},
      {id:4, name:'Bottle'}
    ]
  }
}
