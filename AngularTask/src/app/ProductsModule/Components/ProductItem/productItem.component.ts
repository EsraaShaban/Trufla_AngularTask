import { Component, Input } from '@angular/core';
import { IProductItem } from './iProductItem';
import { ProductItemModel } from './productItemModel';

@Component({
  selector: 'product-item',
  templateUrl: './productItem.component.html',
  styleUrls: ['./productItem.component.scss'],
  providers: [ProductItemModel]
})

export class ProductItemComponent {

  @Input() public set data(data: IProductItem) {
    this.model.data = data;
  }

  constructor(public model: ProductItemModel) {}

}
