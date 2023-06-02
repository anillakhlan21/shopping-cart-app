import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[]=[];

  constructor(
    private productService: ProductService,
    private cartService: ShoppingCartService
  ){}

  ngOnInit(){
    this.products = this.productService.products
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)

  }

  
  
}
