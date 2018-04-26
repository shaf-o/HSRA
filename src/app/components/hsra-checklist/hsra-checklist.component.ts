import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-hsra-checklist',
  templateUrl: './hsra-checklist.component.html',
  styleUrls: ['./hsra-checklist.component.css']
})
export class HsraChecklistComponent implements OnInit {

  selectedProductValue = 'DPS-PIUS';
  selectedReleaseValue = '1';
  selectedGateValue = 'DP';

  displayedColumns = ['position', 'requirement', 'url', 'conformance', 'rationale'];
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
  requirement: string;
  position: number;
  url: string;
  conformance: string;
  rationale: string;
}

const ELEMENT_DATA: Element[] = [{
  'position': 1,
  'requirement': 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus.',
  'url': 'https://prlog.org',
  'conformance': 'Partially Conformant',
  'rationale': 'Services'
}, {
  'position': 2,
  'requirement': 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  'url': 'http://ucoz.ru',
  'conformance': 'Fully Conformant',
  'rationale': 'Accounting'
}, {
  'position': 3,
  'requirement': 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. accumsan odio. Curabitur convallis.',
  'url': 'http://tmall.com',
  'conformance': 'Fully Conformant',
  'rationale': 'Marketing'
}, {
  'position': 4,
  'requirement': 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, molestie nibh in lectus.',
  'url': 'https://columbia.edu',
  'conformance': 'Non Conformant',
  'rationale': 'Support'
}, {
  'position': 5,
  'requirement': 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer sapien quis libero.',
  'url': 'http://bandcamp.com',
  'conformance': 'Partially Conformant',
  'rationale': 'Services'
}, {
  'position': 6,
  'requirement': 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  'url': 'http://amazon.co.uk',
  'conformance': 'Non Conformant',
  'rationale': 'Business Development'
}, {
  'position': 7,
  'requirement': 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  'url': 'http://house.gov',
  'conformance': 'Not Applicable',
  'rationale': 'Engineering'
}];
