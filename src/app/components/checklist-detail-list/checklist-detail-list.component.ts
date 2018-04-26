import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  GridOptions
} from 'ag-grid';
import {
  AgEditorComponent
} from 'ag-grid-angular';
import { ManageMappingChecklistMilestoneService } from '../../services/cao-admin-services/manage-mapping-checklist-milestone.service';

@Component({
  selector: 'app-checklist-detail-list',
  templateUrl: './checklist-detail-list.component.html',
  styleUrls: ['./checklist-detail-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ChecklistDetailListComponent implements OnInit {
  gridOptions: GridOptions;
  private paginationPageSize: number;

  constructor(
    private manageMappingChecklistMilestoneService: ManageMappingChecklistMilestoneService
  ) {
    this.gridOptions = <GridOptions>{};

    this.gridOptions.columnDefs = [{
      headerName: 'Manifesto Items',
      children: [{
        headerName: '#',
        field: 'position',
        headerClass: 'custom-header-style',
        width: 80,
        pinned: 'left',
        lockPinned: true,
        suppressFilter: true
      },
      {
        headerName: 'Conformance Checklist',
        field: 'requirement_text',
        headerClass: 'custom-header-style',
        width: 350,
        pinned: 'left',
        lockPinned: true
      },
      {
        headerName: 'URL',
        field: 'url',
        headerClass: 'custom-header-style',
        width: 300,
        pinned: 'left',
        lockPinned: true,
        cellRenderer: function (params) {
          return '<a [href]="params.value">' + params.value + '</a>';
        }
      },
      {
        headerName: 'Document/Evidence Link',
        field: 'document_link',
        headerClass: 'custom-header-style',
        width: 300,
        pinned: 'left',
        lockPinned: true
      }

      ]
    },
    {
      headerName: 'Native',
      children: [{
        headerName: 'CRA',
        columnGroupShow: 'open',
        children: [{
          headerName: 'PI',
          columnGroupShow: 'open',
          width: 150,
          valueSetter: function (params) { return params.data.newValue; },
          valueGetter: function (params) { return params.data.newValue; },
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        },
        {
          headerName: 'RAD',
          columnGroupShow: 'open',
          width: 150,
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        }
        ]
      },
      {
        headerName: 'CPA',
        columnGroupShow: 'open',
        children: [{
          headerName: 'PI',
          columnGroupShow: 'open',
          width: 150,
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        },
        {
          headerName: 'PSD',
          columnGroupShow: 'open',
          width: 150,
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        },
        {
          headerName: 'POS',
          columnGroupShow: 'open',
          width: 150,
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        },
        {
          headerName: 'PAS',
          columnGroupShow: 'open',
          width: 150,
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        },
        {
          headerName: 'PAD',
          columnGroupShow: 'open',
          width: 150,
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['I', 'O', 'P', 'NA'],
          }
        }
        ]
      },
      {
        headerName: 'DP',
        columnGroupShow: 'open',
        width: 150
      },
      {
        headerName: 'PDLM',
        columnGroupShow: 'open',
        width: 150
      }
      ]
    },
    {
      headerName: 'Agile',
      children: [{
        headerName: 'CAI',
        columnGroupShow: 'open',
        children: [{
          headerName: 'PI',
          columnGroupShow: 'open',
          width: 150
        },
        {
          headerName: 'RAD',
          columnGroupShow: 'open',
          width: 150
        }
        ]
      },
      {
        headerName: 'DP[AGL]',
        columnGroupShow: 'open',
        children: [{
          headerName: 'PI',
          columnGroupShow: 'open',
          width: 150
        },
        {
          headerName: 'PSD',
          columnGroupShow: 'open',
          width: 150
        },
        {
          headerName: 'POS',
          columnGroupShow: 'open',
          width: 150
        }
        ]
      },
      {
        headerName: 'DPI',
        columnGroupShow: 'open',
        width: 150
      },
      {
        headerName: 'PDLM[AGL]',
        columnGroupShow: 'open',
        width: 150
      }
      ]
    }
    ];
    this.gridOptions.rowData = [{
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
    }, {
      'position': 5,
      'requirement_text': 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      'url': 'https://stumbleupon.com/felis/ut/at/dolor.png',
      'document_link': 'http://surveymonkey.com/amet/nulla/quisque/arcu.xml'
    }, {
      'position': 6,
      'requirement_text': 'Curabitur at ipsum ac tellus semper rutrum ac, lobortis vel, dapibus at, diam.',
      'url': 'https://who.int/et/magnis/dis.jsp',
      'document_link': 'http://amazonaws.com/morbi/vestibulum/velit/id/pretium/iaculis.aspx'
    }, {
      'position': 7,
      'requirement_text': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      'url': 'https://smh.com.au/convallis/nunc.jsp',
      'document_link': 'https://engadget.com/non/lectus/aliquam/sit/amet/diam.aspx'
    }, {
      'position': 8,
      'requirement_text': 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      'url': 'https://npr.org/in/faucibus/orci.jpg',
      'document_link': 'http://npr.org/vestibulum/ante/ipsum/primis/in/faucibus.jpg'
    }, {
      'position': 9,
      'requirement_text': 'Sed sagittis. Nam congue, quis orci. Nullam molestie nibh in lectus.',
      'url': 'http://i2i.jp/aliquet/at.jsp',
      'document_link': 'http://devhub.com/in/lacus/curabitur/at/ipsum/ac/tellus.jpg'
    }, {
      'position': 10,
      'requirement_text': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      'url': 'https://mail.ru/sapien.html',
      'document_link': 'https://wikispaces.com/cubilia.html'
    }, {
      'position': 11,
      'requirement_text': 'Duis consequat dui nec nisi volutpat eleifend. ringilla rhoncus.',
      'url': 'http://barnesandnoble.com/justo/pellentesque/viverra/pede/ac/diam/cras.jpg',
      'document_link': 'https://noaa.gov/consequat/nulla/nisl.aspx'
    }, {
      'position': 12,
      'requirement_text': 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      'url': 'http://uol.com.br/nisi/venenatis/tristique/fusce/congue.jsp',
      'document_link': 'https://si.edu/convallis.xml'
    }, {
      'position': 13,
      'requirement_text': 'Vestibulum quam sapien, accumsan odio. Curabitur convallis.',
      'url': 'http://biglobe.ne.jp/venenatis/lacinia.jpg',
      'document_link': 'https://npr.org/erat/quisque/erat/eros/viverra/eget.jsp'
    }, {
      'position': 14,
      'requirement_text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
      'url': 'https://bandcamp.com/porttitor/pede/justo.html',
      'document_link': 'https://buzzfeed.com/luctus/et/ultrices/posuere/cubilia/curae/mauris.png'
    }, {
      'position': 15,
      'requirement_text': 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      'url': 'http://buzzfeed.com/nunc/nisl.xml',
      'document_link': 'http://storify.com/consequat/dui/nec/nisi/volutpat.js'
    }, {
      'position': 16,
      'requirement_text': 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      'url': 'https://sun.com/augue/aliquam/erat/volutpat/in/congue/etiam.html',
      'document_link': 'https://cafepress.com/congue/etiam/justo.html'
    }, {
      'position': 17,
      'requirement_text': 'Morbi non lectus. Aliquam sit amet diam in ed, tincidunt eu, felis.',
      'url': 'http://alexa.com/turpis/a.jpg',
      'document_link': 'https://comsenz.com/in/hac/habitasse/platea.html'
    }, {
      'position': 18,
      'requirement_text': 'Fusce posuere felis sed lacus. rhoncus dui vel sem.',
      'url': 'http://auda.org.au/quis/odio/consequat/varius/integer/ac/leo.js',
      'document_link': 'https://reverbnation.com/et/ultrices/posuere/cubilia/curae/donec.aspx'
    }, {
      'position': 19,
      'requirement_text': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      'url': 'http://topsy.com/consequat/dui.png',
      'document_link': 'https://bbb.org/dui/nec/nisi/volutpat/eleifend.jpg'
    }, {
      'position': 20,
      'requirement_text': 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      'url': 'http://exblog.jp/dolor/sit/amet/consectetuer/adipiscing.jsp',
      'document_link': 'https://pagesperso-orange.fr/cursus/id/turpis/integer/aliquet.jsp'
    }, {
      'position': 21,
      'requirement_text': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      'url': 'http://bloglines.com/neque/duis/bibendum/morbi/non.json',
      'document_link': 'http://china.com.cn/parturient.aspx'
    }, {
      'position': 22,
      'requirement_text': 'Donec diam neque, vestibulum eget, vulputate ut, Integer ac neque.',
      'url': 'http://naver.com/velit/eu/est/congue/elementum/in.jpg',
      'document_link': 'https://weibo.com/consectetuer/eget.xml'
    }, {
      'position': 23,
      'requirement_text': 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      'url': 'https://sbwire.com/cursus/vestibulum/proin/eu.json',
      'document_link': 'https://studiopress.com/ac/nibh/fusce/lacus/purus/aliquet.xml'
    }, {
      'position': 24,
      'requirement_text': 'Integer tincidunt ante vel ipsum. Praesent blandit commodo placerat.',
      'url': 'http://macromedia.com/libero/quis/orci/nullam/molestie.png',
      'document_link': 'http://addthis.com/tortor/quis/turpis.jpg'
    }, {
      'position': 25,
      'requirement_text': 'Quisque porta volutpat erat. Quisque nulla. Nunc purus.',
      'url': 'https://mozilla.com/iaculis/justo/in/hac/habitasse/platea/dictumst.json',
      'document_link': 'http://i2i.jp/non.jsp'
    }];

    function selectValueSetter(params) {
      return params.newValue;
    }
  }

  ngOnInit() {
    this.manageMappingChecklistMilestoneService.getAllMappingChecklistMilestoneConfig().subscribe(res => {
      // debugger;

    },
      error => {
        console.error(error);
      });
  }

  configStyle() {
    const styles = {
      'width': '100%',
      'height': '600px'
    };
    return styles;
  } // end:configStyle

} // end:class-ChecklistDetailListComponent
