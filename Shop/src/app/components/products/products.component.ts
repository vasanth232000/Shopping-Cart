import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products:any= [];
  public key : string = '';
  public math = Math;
constructor(private productsService: ProductsService,private cartService: CartService){
}

addtocart(product:any){
  this.cartService.addtocart(product);
}



ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (res:any)=>{
        this.products = res;
      }
    )

    this.cartService.searchService.subscribe((res)=>{
      this.key = res;
    })
}
}
