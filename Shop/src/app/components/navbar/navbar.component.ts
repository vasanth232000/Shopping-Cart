import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
count : any;
search:string = '';
constructor(private cartService: CartService){}

searchFun(event: any){
  this.search = event.target.value;
  this.cartService.searchService.next(this.search);
}

ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.count = res.length;
    })
}
}
