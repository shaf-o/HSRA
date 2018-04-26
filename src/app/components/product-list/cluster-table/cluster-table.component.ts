import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog } from '@angular/material';
import { AddClusterDialogComponent } from '../../dialogs/add-cluster-dialog/add-cluster-dialog.component';

@Component({
  selector: 'app-cluster-table',
  templateUrl: './cluster-table.component.html',
  styleUrls: ['./cluster-table.component.css']
})
export class ClusterTableComponent implements OnInit {

  displayedColumns = ['position', 'clustercode', 'clustername', 'status', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog() {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddClusterDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

  ngOnInit() {
  }

}

export interface Element {
  position: number;
  clustercode: string;
  clustername: string;
  status: string;
}

const ELEMENT_DATA: Element[] = [{
  'position': 1,
  'clustercode': 'PH',
  'clustername': 'PH',
  'status': 'In-Active'
}, {
  'position': 2,
  'clustercode': 'DN7T',
  'clustername': 'DN7T',
  'status': 'In-Active'
}, {
  'position': 3,
  'clustercode': 'CCHI',
  'clustername': 'CCHI',
  'status': 'In-Active'
}, {
  'position': 4,
  'clustercode': 'CAO',
  'clustername': 'CAO',
  'status': 'Active'
}, {
  'position': 5,
  'clustercode': 'S&I',
  'clustername': 'S&I',
  'status': 'In-Active'
}, {
  'position': 6,
  'clustercode': 'PH',
  'clustername': 'PH',
  'status': 'In-Active'
}, {
  'position': 7,
  'clustercode': 'DN7T',
  'clustername': 'DN7T',
  'status': 'In-Active'
}];
