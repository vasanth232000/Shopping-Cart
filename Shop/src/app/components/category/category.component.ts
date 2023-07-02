import { Component,OnInit,Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

      @Input() category: any;

  public Product :any;
  public phone:any;
  public math = Math;
constructor(public Products : ProductsService){
}

ngOnInit(): void {
    this.Products.getProducts().subscribe(
      (res:any)=>{
        this.Product = res.products;
      }
    )

    this.Products.getCategoryProduct(this.category).subscribe(
      (res)=>{
        this.phone = res;
      }
    )
}
}
