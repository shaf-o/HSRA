import {Component} from '@angular/core';

import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-requirement-select-renderer',
  templateUrl: './requirement-select-renderer.component.html',
  styleUrls: ['./requirement-select-renderer.component.css']
})
export class RequirementSelectRendererComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }

  refresh(params: any): boolean {
      this.params = params;
      return true;
  }
}
