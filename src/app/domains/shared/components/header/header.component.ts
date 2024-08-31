import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
// import { Product } from '../../models/product.model';
import { CarService } from '@shared/services/car.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  // @Input({required: true}) car: Product[] = [];
  // total = signal(0);
  private carService = inject(CarService);
  car = this.carService.car;
  total = this.carService.total;

  // ngOnChanges(changes: SimpleChanges){
  //   const car = changes['car'];
  //   if(car){
  //     this.total.set(this.calcTotal());
  //   }    
  // }

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  // calcTotal(): number{
  //   return this.car.reduce((total, product) => total + product.price, 0);
  // }
}
