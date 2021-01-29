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
    // if(localStorage.getItem("productsData") == null)
    //   this.products = [];
    // else {
    //   this.products = JSON.parse(localStorage.getItem("productsData"));
    //   this.loadProducts();
    // }
   // this.getCashedProduts();
    this.products = this.getCashedProduts();
    this.loadProducts();
  }


  // Load Products
  public loadProducts(){
    this.sharedService.getProductJsonData().subscribe(res => {
      this.products = res;
      // if(this.addedItem) {
      // debugger
      //   this.products.push(this.addedItem);
      //   this.setCachedProducts(this.products);
      //   this.loadProducts();
      // }
    })
  }

  // Set Cashed Products
  public setCachedProducts(products) {
    this.localStorage.set("productsData" , JSON.stringify(products));
  }

  // Get Cashed Products
  public getCashedProduts() {
    console.log(JSON.parse(this.localStorage.get("productsData")))
    console.log(this.localStorage.get("productsData"))
    return JSON.parse(this.localStorage.get("productsData"));
  }

}
