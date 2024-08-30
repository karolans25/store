import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // img = 'https://picsum.photos/640/640?r=' + Math.random();
  @Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';

  @Output() addToCar = new EventEmitter();

  addToCarHandler(){
    console.log('Click from child ' + this.title);
    this.addToCar.emit('Hola, este es un msg desde el child ' + this.title);
  }
}
