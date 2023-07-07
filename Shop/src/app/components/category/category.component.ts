import { Component,OnInit,Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

      @Input() 
      category: any;
      heading: string = '';
      

  public Product :any;
  public phone:any[] = [];
  public math = Math;
constructor(public Products : ProductsService,public cartService:CartService,public router : Router){  

}

addtocart(product:any){
  this.cartService.addtocart(product);
}


ngOnInit(): void {
  
    this.Products.getProducts().subscribe(
      (res:any)=>{
        this.Product = res;
      }
    )

    this.Products.getCategoryProduct(this.category).subscribe(
      (res)=>{
        this.phone = res;
      }
    )
}
}
