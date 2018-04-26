import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ManageMilestoneService } from '../../../services/cao-admin-services/manage-milestone.service';
import { Milestone, MilestoneInstance } from '../../../views/dashboard/milestone-list/milestone-list-model/milestone-list-model';
import { Process, ProcessInstance, ProcessType } from '../../../views/dashboard/process-list/process-list-model/process-list-model';
import { ManageProcessService } from '../../../services/cao-admin-services/manage-process.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule } from '@angular/forms';
import { ErrorService } from '../../../services/error/error.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-milestone-dialog',
  templateUrl: './add-milestone-dialog.component.html',
  styleUrls: ['./add-milestone-dialog.component.css']
})
export class AddMilestoneDialogComponent implements OnInit {
  private milestoneObj: Milestone;
  private processList: Process[];
  private processObj: Process;
  milestoneInstance: MilestoneInstance;
  private onCreate: boolean;
  public heading: string;
  constructor(public manageMilestoneService: ManageMilestoneService,
    public manageProcessService: ManageProcessService,
    public thisDialogRef: MatDialogRef<AddMilestoneDialogComponent>,
    public snackBar: MatSnackBar,
    public errorService: ErrorService,
    @Inject(MAT_DIALOG_DATA) public data: Milestone,
  ) {

  }// end:constructor

  prePopulateFields() {
    if (this.data === null) {
      this.heading = 'Add New Milestone';
      this.onCreate = true;
      this.processObj = this.processList[0]; // the ngModel for select will take first of the options
      console.log('ngModel on Create: ', this.processObj);
    } else { 
      this.heading = 'Edit Milestone';
      this.milestoneInstance.setInstance(this.data);
      this.onCreate = false;
      const listOption = this.milestoneInstance.getInstance().process;
      const filteredList = this.processList.filter((item) => {
        return item.name === listOption.name;
      });
      this.processObj = filteredList[0]; // the ngModel for select will take first of the options
    }
    this.milestoneObj = this.milestoneInstance.getInstance();
  }// end:prePopulateFields

  ngOnInit() {
    this.milestoneInstance = new MilestoneInstance();
    this.milestoneObj = this.milestoneInstance.getInstance();
    this.manageProcessService.getAllProcessConfig().subscribe(res => {
      this.processList = res;
      this.prePopulateFields();
    });
  }// end:ngOnInit

  selectedProcess(selectedObj: any) {
    this.processObj = selectedObj;
  }// end:selectedMilestoneType

  onCreateConfirm(milestoneObj) {
    milestoneObj.process = this.processObj;
    if (this.onCreate) {
      this.manageMilestoneService.createMilestone(milestoneObj).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully created Milestone', 'Close', {
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
    } else {
      this.manageMilestoneService.updateMilestone(milestoneObj).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully updated Process', 'Close', {
            duration: 3000
          });
        } else {
          //  var parseBody = JSON.parse(res._body);
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

  // error Handling
  // tslint:disable-next-line:member-ordering
  milestoneCodeFormControl = new FormControl('', [
    Validators.required
  ]);

  // tslint:disable-next-line:member-ordering
  milestoneNameFormControl = new FormControl('', [
    Validators.required
  ]);

}// end:class-AddMilestoneDialogComponent

