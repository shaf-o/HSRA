import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { StorageService } from '../../../services/storage/storage.service';
import { DashboardService } from '../../../services/architect-services/dashboard.service';


interface ProjectDetail {
  id: number;
  name: string;
  businessUnit: string;
  release: string;
  status: string;
  action: string;
}


@Component({
  selector: 'app-overview-dashboard',
  templateUrl: './overview-dashboard.view.html',
  styleUrls: ['./overview-dashboard.view.scss']
})
export class OverviewDashboardComponent implements OnInit {
    isLoaded: boolean;
    fullName: string;
    displayedColumns: string[];
    dataSource: MatTableDataSource<ProjectDetail>;
    @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor (
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private storageService: StorageService,
    private dashboardService: DashboardService
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    if ( this.displayedColumns.length > 0 ) {
      this.dataSource.filter = filterValue;
    }
  }

  onActionButtonClick () {
    this.dashboardService.routeArchitectScreen(1);
  }

  ngOnInit() {
    this.isLoaded = true;
    this.fullName = this.storageService.getFullName();
    // this.storageService.getMockProjectDetails().subscribe(res => {
    this.dashboardService.getDashboardDetails().subscribe(res => {
      this.isLoaded = false;
      console.log('Response from server: ', res);
      const tableList = res;
      const updatedTable: ProjectDetail[] = tableList.map( (item, index) => {
        let action = 'Start';
        if ( item.status === 'in_progress') {
          action = 'Continue';
        } else if (item.status === 'submitted') {
          action = 'Submit';
        }
        return {
          id: index + 1,
          name: item.name,
          businessUnit: item.bu_name,
          release: item.projectVersion ? item.projectVersion.version : 'NA',
          status: item.status.toUpperCase(),
          action: action
        };
      });
      this.displayedColumns = ['id', 'name', 'businessUnit', 'release', 'status', 'action'];
      this.dataSource = new MatTableDataSource < ProjectDetail > (updatedTable);
      this.dataSource.paginator = this.paginator;

    });
  }

}




