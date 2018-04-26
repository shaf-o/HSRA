import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-file-url-dialog',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './file-url-dialog.component.html',
  styleUrls: ['./file-url-dialog.component.scss']
})
export class FileUrlDialogComponent implements OnInit {
  private isLoading: boolean;
  private isFileUploaded: boolean;
  private isConfirmDisabled: boolean;
  constructor(
    public thisDialogRef: MatDialogRef<FileUrlDialogComponent>,
  ) { }

  fileUploadHandler(inputObj) {
    this.isLoading = true;
    console.log('Selected File is: ', inputObj);
    this.isLoading = false;
    this.isConfirmDisabled = false;
  }

  deleteUploadHandler(inputObj) {
    this.isLoading = true;
    console.log('Delete Local File object: ', inputObj);
    this.isLoading = false;
    this.isConfirmDisabled = inputObj ? true : false;
  }

  onCloseCancel () {
    this.thisDialogRef.close('Cancel');
  }

  ngOnInit() {
    this.isConfirmDisabled = true;
    this.isLoading = false;
    this.isFileUploaded = false;
  }

}
