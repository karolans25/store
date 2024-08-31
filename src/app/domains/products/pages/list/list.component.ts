import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CarService } from '@shared/services/car.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private carService = inject(CarService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id!: string ;

  constructor(){  }

  ngOnInit(){
    // this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    // const category_id = changes['category_id'];
    // if (category_id){
    //   this.getProducts();
    // }
    this.getProducts();
  }

  addToCar(product: Product ){
    // this.car.update(prevState => [...prevState, product])
    // console.log(this.car().length)
    this.carService.addToCar(product);
   }

  private getProducts(category_id?: string){
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    });
  }

  private getCategories(){
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {
        
      }
    });
  }

}
