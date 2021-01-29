import { Injectable } from "@angular/core";
import { IProductItem } from "./iProductItem";

@Injectable()
export class ProductItemModel {

  //===================Data=================
  public data: IProductItem = {} as IProductItem;

  constructor() {}

}
