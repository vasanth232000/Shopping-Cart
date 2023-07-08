import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';


const routes: Routes = [
  {path:'', component: HomeComponent,pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'product/:id', component: ProductComponent},
  {path:'smartphones', component: CategoriesComponent},
  {path:'laptops', component: CategoriesComponent},
  {path:'fragrances', component: CategoriesComponent},
  {path:'skincare', component: CategoriesComponent},
  {path:'groceries', component: CategoriesComponent},
  {path:'home-decoration', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
