import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: { product: Product, quantity: number }[] = [];
  private cartItemsSubject: BehaviorSubject<{ product: Product, quantity: number }[]> = new BehaviorSubject<{ product: Product, quantity: number }[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product): void {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeSingleItemFromCart(product: Product): void {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingCartItem) {
      existingCartItem.quantity--;
      if (existingCartItem.quantity === 0) {
        const itemIndex = this.cartItems.indexOf(existingCartItem);
        this.cartItems.splice(itemIndex, 1);
      }
    }
    this.cartItemsSubject.next(this.cartItems);
  }
}
