import { Component, OnInit, Output, EventEmitter, ElementRef, Renderer2, Input } from '@angular/core';
import { FileUrlDialogComponent } from './file-url-dialog/file-url-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-file-url-combo',
  templateUrl: './file-url-combo-ui.component.html',
  styleUrls: ['./file-url-combo-ui.component.scss']
})
export class FileURLComboUIComponent implements OnInit {
  @Input() rowDetails: any;
  // @Output() fileUpload: EventEmitter<File> = new EventEmitter<File>();
  constructor(
    public dialog: MatDialog,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  openDialog() {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(FileUrlDialogComponent, {
      width: '700px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.ngOnInit();
    });
  }

  ngOnInit() {}

}
