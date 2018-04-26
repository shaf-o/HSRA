import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-add-cluster-dialog',
  templateUrl: './add-cluster-dialog.component.html',
  styleUrls: ['./add-cluster-dialog.component.css']
})
export class AddClusterDialogComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<AddClusterDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
