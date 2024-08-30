import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  car = signal<Product[]>([]);
  total = computed(() => {
    const car = this.car();
    return car.reduce((total, product) => total + product.price, 0);
  });

  constructor() { }

  addToCar(product: Product){
    this.car.update(prev => [...prev, product]);
  }
}
