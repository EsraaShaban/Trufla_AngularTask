import { Injectable } from "@angular/core";
import { SharedService } from "src/app/SharedModule/Services/shared.service";
import { IProductItem } from "../ProductItem/iProductItem";
import { LocalStorageService } from "angular-web-storage";

@Injectable()
export class ProductListModel {

  // ====================Data==================
  public products;
  public addedItem: IProductItem = {} as IProductItem;

  constructor(private sharedService: SharedService, private localStorage: LocalStorageService) {
    if(JSON.parse(this.localStorage.get("productsData")) == null)
      this.loadProducts();
    else
      this.getCashedProduts();
  }


  // Load Products
  public loadProducts() {
    this.sharedService.getProductJsonData().subscribe(res => {
      this.products = res;
    })
  }

  // Set Cashed Products
  public setCachedProducts(products) {
    this.localStorage.set("productsData" , JSON.stringify(products));
  }

  // Get Cashed Products
  public getCashedProduts() {
    this.products = JSON.parse(this.localStorage.get("productsData"));
    return this.products;
  }

}
