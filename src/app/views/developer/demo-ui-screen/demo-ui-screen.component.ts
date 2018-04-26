import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-demo-ui-screen',
  templateUrl: './demo-ui-screen.component.html',
  styleUrls: ['./demo-ui-screen.component.scss']
})
export class DemoUIScreen implements OnInit {

  displayedColumns = ['position', 'requirement', 'conformance', 'rationale'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private storageService: StorageService
  ) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.storageService.getAllTodoChecklistMock().subscribe(res => {
      console.log('Mock Conformance To Checklist is: ', res.json());
    });
  }

}

export interface Element {
  requirement: string;
  position: number;
  url: string;
  conformance: {status: string};
  rationale: string;
}

const ELEMENT_DATA: Element[] = [{
  'position': 1,
  'requirement': 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus.',
  'url': 'https://prlog.org',
  'conformance': {
    status: 'P'
  },
  'rationale': 'Services'
}, {
  'position': 2,
  'requirement': 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  'url': 'http://ucoz.ru',
  'conformance': {status: 'I'},
  'rationale': 'Accounting'
}, {
  'position': 3,
  // tslint:disable-next-line:max-line-length
  'requirement': 'Where common platforms, common building blocks, common technology choices (including OSS and 3rd parties) and common services do not fit the functional and non-functional requirements, deviations are documented and agreed with the CAO',
  'url': 'http://tmall.com',
  'conformance': {status: 'I'},
  'rationale': 'Marketing'
}, {
  'position': 4,
  'requirement': 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, molestie nibh in lectus.',
  'url': 'https://columbia.edu',
  'conformance': {status: 'O'},
  'rationale': 'Support'
}, {
  'position': 5,
  'requirement': 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer sapien quis libero.',
  'url': 'http://bandcamp.com',
  'conformance': {
    status: 'P'
  },
  'rationale': 'Services'
}, {
  'position': 6,
  'requirement': 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  'url': 'http://amazon.co.uk',
  'conformance': {status: 'O'},
  'rationale': 'Business Development'
}, {
  'position': 7,
  'requirement': 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  'url': 'http://house.gov',
  'conformance': {status: 'NA'},
  'rationale': 'Engineering'
}];
