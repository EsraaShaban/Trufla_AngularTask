import { Component, EventEmitter, Output } from '@angular/core';
import { IProductItem } from '../ProductItem/iProductItem';
import { ProductModel } from './productModel';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductModel]
})

export class ProductComponent {

  @Output() public onSave: EventEmitter<IProductItem> = new EventEmitter<IProductItem>();
  @Output() public onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(public model: ProductModel) { }

   // Save
  public save() {
    this.onSave.emit(this.model.dynamicForm.value);
  }

  // Close
  public close() {
    this.onClose.emit();
  }


}
