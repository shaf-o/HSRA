import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-add-bg-dialog',
  templateUrl: './add-bg-dialog.component.html',
  styleUrls: ['./add-bg-dialog.component.css']
})
export class AddBgDialogComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<AddBgDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
