import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { AgEditorComponent } from 'ag-grid-angular';
import { StorageService } from '../../../services/storage/storage.service';
import { ProjectMilestone } from '../../../components/hsra-project-details/hsra-project.model';

@Component({
  selector: 'app-conformance-list',
  templateUrl: './conformance-list.component.html',
  styleUrls: ['./conformance-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConformanceListComponent implements OnInit {

  gridOptions: GridOptions;
  conformanceList: any[];
  private paginationPageSize: number;

  constructor(
    private storageService: StorageService
  ) {
    this.gridOptions = <GridOptions>{};

    this.gridOptions.columnDefs = [
          {
            headerName: 'Header Group',
            field: 'group',
            cellClass: 'conformance-group-class',
            hide: true,
            rowGroup: true,
          },
          {
            headerName: 'SubGroup',
            field: 'subgroup',
            hide: true,
            rowGroup: true,
          },
          {
            headerName: '#',
            field: 'id',
            headerClass: 'custom-header-style',
            width: 80,
            pinned: 'left',
            lockPinned: true,
            hide: true
          },
          {
            headerName: 'Conformance Checklist',
            field: 'name',
            headerClass: 'custom-header-style',
            width: 1550
          },
          {
            headerName: 'Template Link',
            field: 'link',
            headerClass: 'custom-header-style',
            width: 195,
            cellRenderer: function (params) {
              return params.value ? `<a href="${params.value}">Download Template</a>` : '';
            }
          },
        {
          headerName: 'Status',
          field: 'status',
          headerClass: 'custom-header-style',
          width: 105
        }
    ];
    this.gridOptions.animateRows = true;
    this.gridOptions.enableGroupEdit = true;
    this.gridOptions.enableRangeSelection = true;
    this.gridOptions.rowData = null;
    this.gridOptions.groupUseEntireRow = true;
    // this.gridOptions.groupMultiAutoColumn = true;

    function selectValueSetter(params) {
      return params.newValue;
    }
  }

  /**
   * configStyle is being called/invoked as part of [ngStyle] of ag-grid-table
  */
  configStyle() {
    const styles = {
      'width': '100%',
      'height': '600px'
    };
    return styles;
  } // end:configStyle

  projectDetailsChangeHandler(inputObj:ProjectMilestone){
    console.log('Conformance List Screen handler: ', inputObj);
  }

  ngOnInit() {
    this.storageService.getMockConformanceList().subscribe(res => {
      console.log('List of Conformanc Records: ', res.json());
      // this.gridOptions.rowData = res.json();
      this.conformanceList = res.json();
      this.gridOptions.api.setRowData(this.conformanceList);
      this.gridOptions.api.hidePopupMenu();
      this.gridOptions.api.sizeColumnsToFit();
    });
  }

}




