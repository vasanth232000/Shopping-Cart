import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems : any[] = [];
  number = Number;
constructor(public cart : CartService){}

deleteItem(id:any){
  this.cart.deleteCartItem(id);
}


deleteAll(){
  this.cart.deleteeveryitem();
}



ngOnInit(): void {
    this.cart.getProducts().subscribe((res:any)=>{
      this.cartItems = res;
    })
}
}
