import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog } from '@angular/material';
import { AddBuDialogComponent } from '../../../../components/dialogs/add-bu-dialog/add-bu-dialog.component';

@Component({
  selector: 'app-bu-table',
  templateUrl: './bu-table.component.html',
  styleUrls: ['./bu-table.component.css']
})
export class BuTableComponent implements OnInit {

  displayedColumns = ['position', 'bucode', 'buname', 'status', 'action'];
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
    let dialogRef = this.dialog.open(AddBuDialogComponent, {
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
  bucode: string;
  buname: string;
  status: string;
}

const ELEMENT_DATA: Element[] = [{
  'position': 1,
  'bucode': 'MCC',
  'buname': 'MCC',
  'status': 'In-Active'
}, {
  'position': 2,
  'bucode': 'OHC',
  'buname': 'OHC',
  'status': 'In-Active'
}, {
  'position': 3,
  'bucode': 'BU1',
  'buname': 'BU1',
  'status': 'Active'
}, {
  'position': 4,
  'bucode': 'TEST',
  'buname': 'TEST',
  'status': 'In-Active'
}, {
  'position': 5,
  'bucode': 'Floor',
  'buname': 'Floor',
  'status': 'In-Active'
}, {
  'position': 6,
  'bucode': 'Garment',
  'buname': 'Garment',
  'status': 'Active'
}, {
  'position': 7,
  'bucode': 'Kitchen',
  'buname': 'Kitchen',
  'status': 'In-Active'
}, {
  'position': 8,
  'bucode': 'Beauty',
  'buname': 'Beauty',
  'status': 'Active'
}, {
  'position': 9,
  'bucode': 'MG',
  'buname': 'MG',
  'status': 'Active'
}, {
  'position': 10,
  'bucode': 'MCC',
  'buname': 'MCC',
  'status': 'Active'
}, {
  'position': 11,
  'bucode': 'OHC',
  'buname': 'OHC',
  'status': 'Active'
}, {
  'position': 12,
  'bucode': 'BU1',
  'buname': 'BU1',
  'status': 'In-Active'
}, {
  'position': 13,
  'bucode': 'TEST',
  'buname': 'TEST',
  'status': 'In-Active'
}, {
  'position': 14,
  'bucode': 'Floor',
  'buname': 'Floor',
  'status': 'Active'
}, {
  'position': 15,
  'bucode': 'Garment',
  'buname': 'Garment',
  'status': 'Active'
}];
