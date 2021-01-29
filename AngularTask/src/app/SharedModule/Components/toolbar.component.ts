import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToolbar } from './iToolbar';
import { ToolbarModel } from './toolbarModel';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [ToolbarModel]
})

export class ToolbarComponent {

  @Input() public set data(data: IToolbar) {
    this.model.data = data;
  }
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(public model: ToolbarModel) {
    this.model.onClick.subscribe(() => this.onClick.emit());
  }

}
