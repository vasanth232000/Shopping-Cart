import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
   myBehaviorSubject = new BehaviorSubject<any>([]);
   cartItems : any = [];
   title:any = "Apple";
  constructor(private notify: NgToastService) {
   }

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
                  this.notify.success({detail:"Item Updated",summary:'You product quantity is increased',sticky:false,duration:2000,position: 'bottomRight'});
                }
      })}else{
        this.cartItems.push(product);
        this.notify.success({detail:"Item Added",summary:'You Added an item in the cart',sticky:false,duration:2000,position: 'bottomRight'});
      }
    this.myBehaviorSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  changeQuantity(id:any,value:any,product:any){
    if(this.cartItems.some((item:any) => item.id == id)){
    this.cartItems.map((item:any)=>{
      if(item.id === id){
        item.quantity = value;
        this.notify.success({detail:"Item Updated",summary:'You product quantity is increased',sticky:false,duration:2000,position: 'bottomRight'});
            }
    })
  }else{
        this.cartItems.push(product);
        this.myBehaviorSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.notify.success({detail:"Item Added",summary:'You Added an item in the cart',sticky:false,duration:2000,position: 'bottomRight'});
      }
  }

  deleteCartItem(id:any){
    this.cartItems = this.cartItems.filter((item:any) => item.id!== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.myBehaviorSubject.next(this.cartItems);
    this.notify.success({detail:"Item Deleted",summary:'You removed an item from the cart',sticky:false,duration:2000,position: 'bottomRight'});
  }

  deleteeveryitem(){
    this.cartItems = [];
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.myBehaviorSubject.next(this.cartItems);
    this.notify.success({detail:"Cart is empty",summary:'You removed every item in the cart',sticky:false,duration:2000,position: 'bottomRight'});
  }

}
