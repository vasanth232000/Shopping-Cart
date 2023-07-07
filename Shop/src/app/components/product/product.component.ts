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
  public currentQuanity = 1;
constructor(public route : ActivatedRoute,public product:ProductsService,public cartService:CartService){

}

addtocart(product:any){
  this.cartService.addtocart(product);
}

getcurrentquantity(e:any,id:any,product:any){
 let value;
 value = e.target.value;
 this.cartService.changeQuantity(id,value,product);
}




ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.product.getSingleProduct(this.id).subscribe(
      (res:any)=>{
        this.currentProduct = res;
      }
    )

    this.cartService.getProducts().subscribe((res)=>{
      res.map((q:any) =>{
        if(q.id == this.id){
          this.currentQuanity = q.quantity;
        }
      })
    })

    console.log(this.currentQuanity)
    
    
}
}
