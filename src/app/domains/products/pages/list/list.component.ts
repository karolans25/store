import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 12,
        img: 'https://picsum.photos/640/640?r=' + Math.random(),
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 24,
        img: 'https://picsum.photos/640/640?r=' + Math.random(),
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 36,
        img: 'https://picsum.photos/640/640?r=' + Math.random(),
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 24,
        img: 'https://picsum.photos/640/640?r=' + Math.random(),
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 5',
        price: 12,
        img: 'https://picsum.photos/640/640?r=' + Math.random(),
        creationAt: new Date().toISOString(),
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string){
    console.log('Listen to the event from parent');
    console.log(event);
  }
}
