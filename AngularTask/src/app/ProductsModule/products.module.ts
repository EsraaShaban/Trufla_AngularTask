import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../AngularMaterialModule/AngularMaterialModule';
import { SharedModule } from '../SharedModule/shared.module';
import { ProductComponent } from './Components/Product/product.component';
import { ProductItemComponent } from './Components/ProductItem/productItem.component';
import { ProductListComponent } from './Components/ProductList/productList.component';
import { ProductsComponent } from './Pages/Products/products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductComponent
  ],
  entryComponents: [ProductComponent]
})

export class ProductsModule { }
