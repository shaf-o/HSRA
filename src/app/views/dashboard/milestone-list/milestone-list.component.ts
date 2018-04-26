import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AddMilestoneDialogComponent } from '../../../components/dialogs/add-milestone-dialog/add-milestone-dialog.component';
import { ManageMilestoneService } from '../../../services/cao-admin-services/manage-milestone.service';
import { Milestone } from './milestone-list-model/milestone-list-model';
import { ConfirmDialogComponent } from '../../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorService } from '../../../services/error/error.service';

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.css']
})
export class MilestoneListComponent implements OnInit {

  displayedColumns = ['level', 'code', 'name', 'process.name', 'action'];
  isLoaded = false;
  public recordCount: any;
  dataSource: MatTableDataSource<Milestone>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
  //  this.dataSource.paginator = this.paginator;
  }

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public manageMilestoneService: ManageMilestoneService,
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
    let dialogRef = this.dialog.open(AddMilestoneDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.isLoaded = true;
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.manageMilestoneService.getAllMilestoneConfig().subscribe(res => {
      this.recordCount = res.length;
      this.isLoaded = false;
      this.dataSource = new MatTableDataSource<Milestone>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteMilestone(milestoneobj) {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true){
        this.isLoaded = true;
        this.manageMilestoneService.deleteMilestone(milestoneobj.id).subscribe(res => {
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
  }

  editMilestone(milestoneobj) {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddMilestoneDialogComponent, {
      width: '600px',
      data: milestoneobj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.ngOnInit();
    });
  }

}

