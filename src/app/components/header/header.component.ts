import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItemsCount = 0

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
   this.cartService.cartItems$.subscribe((items)=>this.cartItemsCount = items.length);
  }
}
