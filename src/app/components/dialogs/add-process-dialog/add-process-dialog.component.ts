import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ManageProcessService } from '../../../services/cao-admin-services/manage-process.service';
import { Process, ProcessInstance, ProcessType } from '../../../views/dashboard/process-list/process-list-model/process-list-model';
import {FormControl, FormGroupDirective, NgForm, Validators, FormsModule } from '@angular/forms';
import { ErrorService } from '../../../services/error/error.service';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-add-process-dialog',
  templateUrl: './add-process-dialog.component.html',
  styleUrls: ['./add-process-dialog.component.css']
})
export class AddProcessDialogComponent implements OnInit {
  private processObj: Process;
  private processTypeList: ProcessType[];
  private processTypeObj: ProcessType;
  processInstance: ProcessInstance;
  private onCreate: boolean;
  public heading: string;  
  private textCodeFormControl = new FormControl('', [
    Validators.required
  ]);
  private textNameFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(public manageProcessService: ManageProcessService,public snackBar: MatSnackBar,public errorService: ErrorService,
    public thisDialogRef: MatDialogRef<AddProcessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Process,
  ) {

  }// end:constructor

  prePopulateFields() {
    if (this.data === null) {
      this.heading = 'Add New Process';
      this.onCreate = true;
      this.processTypeObj = this.processTypeList[0]; // the ngModel for select will take first of the options
      console.log('ngModel on Create: ', this.processTypeObj);

    } else {
      this.heading = 'Edit Process';
      this.processInstance.setInstance(this.data);
      this.onCreate = false;
    //  console.log(this.processInstance.getInstance());
      const listOption = this.processInstance.getInstance().processType;
      const filteredList = this.processTypeList.filter((item) => {
        return item.name === listOption.name;
      });
      this.processTypeObj = filteredList[0]; // the ngModel for select will take first of the options
      console.log('ngModel on Edit: ', this.processTypeObj);
    }
    this.processObj = this.processInstance.getInstance();
    console.log('ProcessObj is: ', this.processObj);
  }// end:prePopulateFields

  ngOnInit() {
    this.processInstance = new ProcessInstance();
    this.processObj = this.processInstance.getInstance();
    this.manageProcessService.getAllProcessTypeConfig().subscribe(res => {
      console.log('Process options are as follows', res);
      this.processTypeList = res;
      this.prePopulateFields();
    });
  }// end:ngOnInit

  selectedProcessType(selectedObj: ProcessType) {
    this.processTypeObj = selectedObj;
  }// end:selectedProcessType
  onCreateConfirm(processObj) {
    processObj.processType = this.processTypeObj;
    if (this.onCreate) {
      this.manageProcessService.createProcess(processObj).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully created Process', 'Close', {
            duration: 3000
          });
        //  console.log('Succesfully created Process');
        } else {
          this.errorService.errorMessage(res);
        //  console.error('Error in create');
        }
        this.thisDialogRef.close('Confirm');
      },
        (error) => {
          console.log(error);
        });
    } else {
      this.manageProcessService.updateProcess(processObj).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully updated Process', 'Close', {
            duration: 3000
          });
        } else {
          this.errorService.errorMessage(res);
        }
        this.thisDialogRef.close('Confirm');
      },
        (error) => {
          console.log(error);
        });
    }

  }// end:onCreateConfirm

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }// end:onCloseCancel

}// end:class-AddProcessDialogComponent

