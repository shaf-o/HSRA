import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog } from '@angular/material';
import { AddBgDialogComponent } from '../../../../components/dialogs/add-bg-dialog/add-bg-dialog.component';

@Component({
  selector: 'app-bg-table',
  templateUrl: './bg-table.component.html',
  styleUrls: ['./bg-table.component.css']
})
export class BgTableComponent implements OnInit {

  displayedColumns = ['position', 'bgcode', 'bgname', 'status', 'action'];
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
    let dialogRef = this.dialog.open(AddBgDialogComponent, {
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
  bgcode: string;
  bgname: string;
  status: string;
}

const ELEMENT_DATA: Element[] = [{
  'position': 1,
  'bgcode': 'HW',
  'bgname': 'HW',
  'status': 'In-Active'
}, {
  'position': 2,
  'bgcode': 'DA',
  'bgname': 'DA',
  'status': 'Active'
}, {
  'position': 3,
  'bgcode': 'PC',
  'bgname': 'PC',
  'status': 'Active'
}, {
  'position': 4,
  'bgcode': 'COF',
  'bgname': 'COF',
  'status': 'Active'
}, {
  'position': 5,
  'bgcode': 'SRC',
  'bgname': 'SRC',
  'status': 'Active'
}, {
  'position': 6,
  'bgcode': 'IGT',
  'bgname': 'IGT',
  'status': 'Active'
}, {
  'position': 7,
  'bgcode': 'US',
  'bgname': 'US',
  'status': 'In-Active'
}, {
  'position': 8,
  'bgcode': 'DI',
  'bgname': 'DI',
  'status': 'In-Active'
}, {
  'position': 9,
  'bgcode': 'PCMS',
  'bgname': 'PCMS',
  'status': 'Active'
}, {
  'position': 10,
  'bgcode': 'PHM',
  'bgname': 'PHM',
  'status': 'Active'
}, {
  'position': 11,
  'bgcode': 'HW',
  'bgname': 'HW',
  'status': 'In-Active'
}, {
  'position': 12,
  'bgcode': 'DA',
  'bgname': 'DA',
  'status': 'In-Active'
}, {
  'position': 13,
  'bgcode': 'PC',
  'bgname': 'PC',
  'status': 'Active'
}, {
  'position': 14,
  'bgcode': 'COF',
  'bgname': 'COF',
  'status': 'In-Active'
}, {
  'position': 15,
  'bgcode': 'SRC',
  'bgname': 'SRC',
  'status': 'In-Active'
}];
