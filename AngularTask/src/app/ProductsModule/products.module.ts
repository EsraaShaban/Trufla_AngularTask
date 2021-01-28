import { NgModule } from '@angular/core';
import { ProductListComponent } from './Components/ProductList/productList.component';
import { ProductsComponent } from './Pages/Products/products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent
  ]
})

export class ProductsModule { }
