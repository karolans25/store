import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // img = 'https://picsum.photos/640/640?r=' + Math.random();
  // @Input({required: true}) img: string = '';
  // @Input({required: true}) price: number = 0;
  // @Input({required: true}) title: string = '';
  @Input({required: true}) product!: Product;

  @Output() addToCar = new EventEmitter();

  addToCarHandler(){
    console.log('Click from child ' + this.product.title);
    this.addToCar.emit('Hola, este es un msg desde el child ' + this.product.title);
  }
}
