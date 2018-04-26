import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AddProjectDialogComponent } from '../dialogs/add-project-dialog/add-project-dialog.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorService } from '../../services/error/error.service';
import { Project } from './project-list-model/project-list-model';
import { ManageProjectService } from '../../services/bu-owner-services/manage-project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  // displayedColumns = ['id', 'code', 'name', 'action'];
   displayedColumns = ['id', 'code', 'name', 'currentProjectVersion', 'project_manager', 'architect', 'action'];
  isLoaded = false;
  public recordCount: any;
  dataSource: MatTableDataSource<Project>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  message: any;
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public manageProjectService: ManageProjectService,
    public errorService: ErrorService
  ) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog() {
   // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.isLoaded = true;
      this.ngOnInit();
    });
  }// end:openDialog

  ngOnInit() {
    this.manageProjectService.getAllProjectConfig().subscribe(res => {
      this.isLoaded = false;
      this.recordCount = res.length;
    //  console.log(this.recordCount);
      this.dataSource = new MatTableDataSource<Project>(res);
      this.dataSource.paginator = this.paginator;
    });
  }// end:ngOnInit

  deleteProject(projectobj) {
    console.log(projectobj.id);
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        // data: projectobj
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === true){
          this.isLoaded = true;
          this.manageProjectService.deleteProject(projectobj.id).subscribe(res => {
            if (res.status === 200) {
              this.snackBar.open(' Deleted Successfully', 'Close', {
                duration: 3000
              });
              this.ngOnInit();
             } else {
               this.errorService.errorMessage(res);
             }
          },
            (error) => {
              console.log(error);
            });
        }
        console.log(`Dialog closed: ${result}`);
        console.log(result);
       this.ngOnInit();
      });

  }// end:deleteProject

  editProject(projectobj) {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '600px',
      data: projectobj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.ngOnInit();
    });

  }

}

