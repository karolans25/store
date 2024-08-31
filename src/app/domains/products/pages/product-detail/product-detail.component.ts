import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CarService } from '@shared/services/car.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');

  private productService = inject(ProductService);
  private carService = inject(CarService);

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }, 
        error: () => {

        }
      })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCar(){
    const product = this.product();
    if (product){
      this.carService.addToCar(product);
    }
  }
}
