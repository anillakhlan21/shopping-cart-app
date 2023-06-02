import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, image: '../../assets/product.jpeg' },
    { id: 2, name: 'Product 2', price: 19.99, image: '../../assets/product.jpeg' },
    { id: 3, name: 'Product 3', price: 5.99, image: '../../assets/product.jpeg' },
  ];

  constructor() { }

  
}
