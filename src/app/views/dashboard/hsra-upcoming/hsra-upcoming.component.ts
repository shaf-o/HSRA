import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { AgEditorComponent } from 'ag-grid-angular';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-hsra-upcoming',
  templateUrl: './hsra-upcoming.component.html',
  styleUrls: ['./hsra-upcoming.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HsraUpcomingComponent implements OnInit {

  gridOptions: GridOptions;
  conformanceList: any[];
  private paginationPageSize: number;
  isComponentBuDisabled: boolean;
  isComponentProjectDisabled: boolean;
  isComponentReleaseDisabled: boolean;
  isComponentMilestoneDisabled: boolean;
  isComponentUpcomingMilestoneLabel: boolean;


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

  ngOnInit() {
    /**
     * Disabling all the organization related fields in HSRA upcoming screen
     */
    this.isComponentBuDisabled = true;
    this.isComponentProjectDisabled = true;
    this.isComponentReleaseDisabled = true;
    this.isComponentMilestoneDisabled = false;
    this.isComponentUpcomingMilestoneLabel = true;
    /**
     * Filling the ag grid table
    */
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
