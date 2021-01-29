import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IToolbar } from "src/app/SharedModule/Components/iToolbar";
import { ProductComponent } from "../../Components/Product/product.component";
import { IProductItem } from "../../Components/ProductItem/iProductItem";

@Injectable()
export class ProductsModel {

  //=========================Data==================
  public toolbarData: IToolbar = {
    title: "Products",
    hasAction: true,
    actionText: "Add Product",
    actionIcon: "add"
  } as IToolbar;

  public addedItem: IProductItem = {} as IProductItem;

  constructor(private dialog: MatDialog) {}

  // Add Product
  public openProductDialog() {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '500px',
     // data: {name: this.name, animal: this.animal}
    });

    let productCopmInstance = dialogRef.componentInstance;

    // On Close
    productCopmInstance.onClose.subscribe( () => {
      dialogRef.close();
    })

    // On Save
    productCopmInstance.onSave.subscribe( item => {
      this.addedItem = item;
      dialogRef.close();
    })
  }

}
