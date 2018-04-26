import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import { IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-requirement-select-editor',
  templateUrl: './requirement-select-editor.component.html',
  styleUrls: ['./requirement-select-editor.component.css']
})
export class RequirementSelectEditorComponent implements ICellEditorAngularComp, AfterViewInit {
  params: any;
  getValue() {
    throw new Error('Method not implemented.');
  }
  isPopup?(): boolean {
    throw new Error('Method not implemented.');
  }
  isCancelBeforeStart?(): boolean {
    throw new Error('Method not implemented.');
  }
  isCancelAfterEnd?(): boolean {
    throw new Error('Method not implemented.');
  }
  focusIn?(): void {
    throw new Error('Method not implemented.');
  }
  focusOut?(): void {
    throw new Error('Method not implemented.');
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
      setTimeout(() => {
      });
  }

  agInit(params: any): void {
      this.params = params;
  }
}
