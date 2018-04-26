import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-hsra-upcoming',
  templateUrl: './hsra-upcoming.component.html',
  styleUrls: ['./hsra-upcoming.component.css']
})
export class HsraUpcomingComponent implements OnInit {

  selectedValue = 'PlatForm Harmonization';

  displayedColumns = ['position', 'requirement_text', 'url', 'document_link'];
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
  requirement_text: string;
  position: number;
  url: string;
  document_link: string;
}

const ELEMENT_DATA: Element[] = [{
  'position': 1,
  'requirement_text': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  'url': 'http://phpbb.com/praesent/blandit.png',
  'document_link': 'https://parallels.com/mauris/morbi/non/lectus/aliquam/sit/amet.png'
}, {
  'position': 2,
  'requirement_text': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  'url': 'https://hp.com/ante/vel/ipsum/praesent.xml',
  'document_link': 'http://google.it/nullam/porttitor/lacus/at/turpis/donec.jpg'
}, {
  'position': 3,
  'requirement_text': 'In hac habitasse platea dictumst. tum neque sapien placerat ante. Nulla justo.',
  'url': 'http://phoca.cz/tellus/semper/interdum/mauris.jsp',
  'document_link': 'http://toplist.cz/mattis/egestas.xml'
}, {
  'position': 4,
  'requirement_text': 'Morbi porttitor lorem id ligula. empus sit amet, sem.',
  'url': 'http://foxnews.com/nulla/integer/pede/justo/lacinia/eget/tincidunt.js',
  'document_link': 'http://ucoz.ru/ornare/imperdiet/sapien/urna/pretium.html'
}];
