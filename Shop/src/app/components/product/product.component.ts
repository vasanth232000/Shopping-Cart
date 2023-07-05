import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  id:any;
  public currentProduct:any;
constructor(public route : ActivatedRoute,public product:ProductsService,public cartService:CartService){
}

addtocart(product:any){
  this.cartService.addtocart(product);
}



ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.product.getSingleProduct(this.id).subscribe(
      (res:any)=>{
        this.currentProduct = res;
        Object.assign(this.currentProduct,{quantity:1,total:this.currentProduct.price});
        console.log(this.currentProduct);
      }
    )
    
    
}
}
