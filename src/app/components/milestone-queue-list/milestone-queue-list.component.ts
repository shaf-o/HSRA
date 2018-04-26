import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-milestone-queue-list',
  templateUrl: './milestone-queue-list.component.html',
  styleUrls: ['./milestone-queue-list.component.css']
})
export class MilestoneQueueListComponent implements OnInit {

  displayedColumns = ['position', 'milestonename', 'milestonelevel'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}

export interface Element {
  milestonename: string;
  position: number;
  milestonelevel: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, milestonename: 'CRA', milestonelevel: '3'},
  {position: 2, milestonename: 'CPA', milestonelevel: '1'},
  {position: 3, milestonename: 'DP', milestonelevel: '2'}
];
