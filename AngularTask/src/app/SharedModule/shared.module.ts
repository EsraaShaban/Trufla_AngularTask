import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../AngularMaterialModule/AngularMaterialModule";
import { ToolbarComponent } from "./Components/toolbar.component";
import { SharedService } from "./Services/shared.service";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  providers: [SharedService]
})

export class SharedModule { }
