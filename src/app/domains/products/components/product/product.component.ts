import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
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
    this.addToCar.emit( this.product );
  }
}
