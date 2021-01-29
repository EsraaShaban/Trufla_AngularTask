import { EventEmitter, Injectable } from "@angular/core";
import { IToolbar } from "./iToolbar";

@Injectable()
export class ToolbarModel {

  //====================Data===============
  public data: IToolbar = {} as IToolbar;

  //====================Events==============
  public onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  // Click
  public click() {
    this.onClick.emit();
  }

}
