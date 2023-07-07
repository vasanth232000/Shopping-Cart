import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products : any;
  public math = Math;
constructor(private productsService: ProductsService,private cartService: CartService){
  console.log('products', this.products);
}

addtocart(product:any){
  this.cartService.addtocart(product);
}



ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (res)=>{
        this.products = res;
        console.log(this.products);
      }
    )
}
}
