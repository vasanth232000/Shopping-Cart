import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
   myBehaviorSubject = new BehaviorSubject<any>([]);
   cartItems : any = [];
  constructor() { }

  getProducts(){
    return this.myBehaviorSubject.asObservable();
  }

  addtocart(product:any){
    if(product.quantity){
    let count = 0;
    if(this.cartItems.includes(product)){
      this.cartItems.map((item:any)=>{
        if(item.id === product.id){
          console.log(item);
                  item.quantity++;
                  item.total *= item.quantity;
                }
      })
    }else{
      this.cartItems.push(product);
    }}else{
      Object.assign(product,{quantity:1,total:product.price});
      this.cartItems.push(product);
      console.log("workings");
    }
    this.myBehaviorSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  deleteCartItem(id:any){
    this.cartItems = this.cartItems.filter((item:any) => item.id!== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.myBehaviorSubject.next(this.cartItems);
  }

  deleteeveryitem(){
    this.cartItems = [];
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.myBehaviorSubject.next(this.cartItems);
  }

}
