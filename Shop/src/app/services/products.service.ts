import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(environment.api).pipe(
      map((res:any) => {
        return res
      })
    )
  }

  getCategoryProduct(categoryId:string){
    let curr ;
    let catARR:any = [];
    return this.http.get<any>(environment.api).pipe(
          map((res:any) => {
            curr = res.products;
            curr.map((item:any)=>{
              if(categoryId == item.category){
                catARR.push(item);
              }
            })
            return catARR;
          })
        )
  }

  getSingleProduct(id:any){
    return this.http.get<any>(`${environment.api}/${id}`).pipe(
      map((res:any) => {
        return res
      })
    )
  }
}
