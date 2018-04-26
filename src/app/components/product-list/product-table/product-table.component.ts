import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog } from '@angular/material';
import { AddProductDialogComponent } from '../../dialogs/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  displayedColumns = ['position', 'productname', 'release', 'prodmanagername', 'architectname', 'lifecycle', 'action'];
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
    let dialogRef = this.dialog.open(AddProductDialogComponent, {
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
  productname: string;
  release: string;
  prodmanagername: string;
  architectname: string;
  lifecycle: string;
}

const ELEMENT_DATA: Element[] = [{
  position: 1,
  productname: 'DPS - Utilization Suite',
  release: 'v3.0.0',
  prodmanagername: 'Gilli Dudden',
  architectname: 'Jodi Goodsall',
  lifecycle: 'PLC'
}, {
  position: 2,
  productname: 'Philips DLS',
  release: 'v1.0.0',
  prodmanagername: 'Selina Currom',
  architectname: 'Sarena Cullington',
  lifecycle: 'RAD'
}, {
  position: 3,
  productname: 'Platform Harmonization',
  release: 'v3.0.0',
  prodmanagername: 'Gilbertine Dodds',
  architectname: 'Gaelan Simao',
  lifecycle: 'POS'
}, {
  position: 4,
  productname: 'AVCounsult',
  release: 'v1.6.0',
  prodmanagername: 'Janine Androletti',
  architectname: 'Lena McKinley',
  lifecycle: 'PI'
}, {
  position: 5,
  productname: 'SDC - HIAT',
  release: 'v1.6.0',
  prodmanagername: 'Mamie Mouser',
  architectname: 'Ulric Grzelczyk',
  lifecycle: 'PAS'
}];
