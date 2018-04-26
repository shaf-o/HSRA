import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ManageProcessService } from '../../../services/cao-admin-services/manage-process.service';
import { Process, ProcessInstance, ProcessType } from '../../../views/dashboard/process-list/process-list-model/process-list-model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {


  private processObj: Process;
  processInstance: ProcessInstance;
  constructor(public snackBar: MatSnackBar, public manageProcessService: ManageProcessService,
    public thisDialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Process,
  ) {
  }

  ngOnInit() {
    this.processInstance = new ProcessInstance();
    this.processObj = this.processInstance.getInstance();
  }

  onDeleteConfirm(processObj) {
   // this.thisDialogRef.close('Confirm');
  }// end:onDeleteConfirm


  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
    // this.snackBar.open(' Delete Cancelled', 'Close', {
    //   duration: 3000
    // });
  }// end:onCloseCancel
}
