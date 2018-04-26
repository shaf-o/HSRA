import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-add-bu-dialog',
  templateUrl: './add-bu-dialog.component.html',
  styleUrls: ['./add-bu-dialog.component.css']
})
export class AddBuDialogComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<AddBuDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
