import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Checklist, ChecklistInstance, ChecklistUploadInstance } from '../../checklist-list/checklist-list-model/checklist-list-model';
import { ManageChecklistService } from '../../../services/cao-admin-services/manage-checklist.service';
import { ErrorService } from '../../../services/error/error.service';

@Component({
  selector: 'app-add-checklist-dialog',
  templateUrl: './add-checklist-dialog.component.html',
  styleUrls: ['./add-checklist-dialog.component.css']
})
export class AddChecklistDialogComponent implements OnInit {
  private checklistObj: Checklist;
  checklistInstance: ChecklistInstance;
  private onCreate: boolean;
  private selectFile: File;
  public groupList: any;
  public isGroupExist: boolean;
  public heading: string;

  nameControl = new FormControl('', [
    Validators.required
  ]);

  descriptionControl = new FormControl('', [
    Validators.required
  ]);

  fileControl = new FormControl('', [
    Validators.required
  ]);
  // selectedFile: File = null;
  constructor(
    public manageChecklistSerive: ManageChecklistService,
    public thisDialogRef: MatDialogRef<AddChecklistDialogComponent>,
    public snackBar: MatSnackBar,
    public errorService: ErrorService,
    @Inject(MAT_DIALOG_DATA) public data: Checklist) { }

  // selectedfile(event) {
  //   // this.selectedFile = <File>event.target.files[0];
  // }// end:selectedfile

  toggleGroupInput() {
    this.isGroupExist = !(this.isGroupExist);
  }

  onFileUploadEvent(event) {
    this.selectFile = event;
    this.snackBar.open(' File uploaded is:' + this.selectFile, 'Close', {
      duration: 3000
    });
    // console.log('File uploaded is: ', this.selectFile);
  }//end:onFileUploadEvent

  onCreateConfirm(inputData: Checklist) {
    let checkListData = new ChecklistUploadInstance();
    if (this.onCreate) {
      checkListData.setName(inputData.name);
      checkListData.setDescription(inputData.description);
      this.selectFile ? checkListData.setFileInstance(this.selectFile) : null;
      let formData = new FormData();
      formData.append('name', checkListData.getName());
      formData.append('description', checkListData.getDescription());
      this.selectFile ? formData.append('file', checkListData.getFileInstance(), checkListData.getFileInstance().name) : null;

      this.manageChecklistSerive.createChecklist(formData).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully created Checklist', 'Close', {
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
      this.manageChecklistSerive.updateChecklist(inputData).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully updated Checklist', 'Close', {
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
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }// end:onCloseCancel

  prePopulateFields() {
    if (this.data === null) {
      this.heading = "Add New Checklist Item";
      this.manageChecklistSerive.getAllChecklistGroupConfig().subscribe(res => {
        console.log(res);
        this.groupList = res;
        if (res.length === 0) {
          this.isGroupExist = false;
        } else {
          this.isGroupExist = true;
        }
      });
      this.onCreate = true;
    } else {
      this.heading = "Edit Checklist Item";
      this.manageChecklistSerive.getAllChecklistConfig().subscribe(res => {
        console.log(res);
        this.groupList = res;
      });
      this.checklistInstance.setInstance(this.data);
      this.onCreate = false;
    }
    this.checklistObj = this.checklistInstance.getInstance();
  }
  ngOnInit() {
    this.isGroupExist = true;
    this.checklistInstance = new ChecklistInstance();
    this.checklistObj = this.checklistInstance.getInstance();
    this.prePopulateFields();
  }

  // error Handling
  // tslint:disable-next-line:member-ordering
  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  // tslint:disable-next-line:member-ordering
  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);

}
