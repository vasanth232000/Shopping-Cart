import { Component,OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public products:any = [];
  public math = Math;
  public category :any;
  public key:string = '';
  public quantity:any = 0;
constructor(public cart : CartService,public route : ActivatedRoute,public product : ProductsService){
}

addtocart(product:any){
  this.cart.addtocart(product);
}




ngOnInit(): void {
  this.category = this.route.snapshot.url[0].path;
    this.product.getCategoryProduct(this.category).subscribe(
      (res)=>{
          this.products = res;
          this.products.map((item:any)=>{
            console.log(item.quantity);
          })
      }
    )

    this.cart.searchService.subscribe((res)=>{
      this.key = res;
    })
}

}
