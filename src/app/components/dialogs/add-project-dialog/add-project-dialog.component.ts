import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Project, ProjectInstance } from '../../project-list/project-list-model/project-list-model';
import { Process, ProcessInstance, ProcessType } from '../../../views/dashboard/process-list/process-list-model/process-list-model';
import { ManageProcessService } from '../../../services/cao-admin-services/manage-process.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule } from '@angular/forms';
import { ErrorService } from '../../../services/error/error.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { ManageProjectService } from '../../../services/bu-owner-services/manage-project.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {
  private projectObj: Project;
  private processList: Process[];
  private processObj: Process;
  projectInstance: ProjectInstance;
  private onCreate: boolean;
  heading: any;
  constructor(public manageProjectService: ManageProjectService,
    public manageProcessService: ManageProcessService,
    public thisDialogRef: MatDialogRef<AddProjectDialogComponent>,
    public snackBar: MatSnackBar,
    public errorService: ErrorService,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) {

  }// end:constructor

  prePopulateFields() {
    if (this.data === null) {
      this.heading = "Add New Project";
      this.onCreate = true;
      this.processObj = this.processList[0]; // the ngModel for select will take first of the options
      console.log('ngModel on Create: ', this.processObj);
    } else {
      this.heading = "Edit Project";
      this.projectInstance.setInstance(this.data);
      this.onCreate = false;
      // const listOption = this.projectInstance.getInstance().process;
      // const filteredList = this.processList.filter((item) => {
      //   return item.name === listOption.name;
      // });
      // this.processObj = filteredList[0]; // the ngModel for select will take first of the options
    }
    this.projectObj = this.projectInstance.getInstance();
  }// end:prePopulateFields

  ngOnInit() {
    this.projectInstance = new ProjectInstance();
    this.projectObj = this.projectInstance.getInstance();
    this.manageProcessService.getAllProcessConfig().subscribe(res => {
      this.processList = res;
      this.prePopulateFields();
    });
  }// end:ngOnInit

  selectedProcess(selectedObj: any) {
    this.processObj = selectedObj;
  }// end:selectedProjectType

  onCreateConfirm(projectObj) {
    projectObj.process = this.processObj;
    if (this.onCreate) {
      this.manageProjectService.createProject(projectObj).subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open(' Succesfully created Project', 'Close', {
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
      this.manageProjectService.updateProject(projectObj).subscribe(res => {
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
  projectCodeFormControl = new FormControl('', [
    Validators.required
  ]);

  projectNameFormControl = new FormControl('', [
    Validators.required
  ]);
  projectProjectManagerFormControl = new FormControl('', [
    Validators.required
  ]);

  projectArchitectFormControl = new FormControl('', [
    Validators.required
  ]);

  projectVersionFormControl= new FormControl('', [
    Validators.required
  ]);
}// end:class-AddProjectDialogComponent

