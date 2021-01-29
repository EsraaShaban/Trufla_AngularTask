import { Component, Input } from '@angular/core';
import { IProductItem } from '../ProductItem/iProductItem';
import { ProductListModel } from './productListModel';

@Component({
  selector: 'product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss'],
  providers: [ProductListModel]
})

export class ProductListComponent {

  @Input() public set item(item: IProductItem) {
    if(Object.keys(item).length != 0) {
      this.model.products.push(item);
      this.model.setCachedProducts(this.model.products);
    }
  }

  constructor(public model: ProductListModel) {}

}
