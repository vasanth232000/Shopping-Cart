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
    if(this.cartItems.some((item:any) => item.id === product.id)){
      this.cartItems.map((item:any)=>{
        if(item.id === product.id){
                  item.quantity++;
                  item.total *= item.quantity;
                  console.log(item.quantity);
                }
      })}else{
        this.cartItems.push(product);
      }
    this.myBehaviorSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  changeQuantity(id:any,value:any,product:any){
    if(this.cartItems.some((item:any) => item.id == id)){
    this.cartItems.map((item:any)=>{
      if(item.id === id){
        item.quantity = value;
            }
    })
  }else{
        this.cartItems.push(product);
        this.myBehaviorSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
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
