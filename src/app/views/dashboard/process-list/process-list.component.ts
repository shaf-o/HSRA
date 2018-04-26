import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AddProcessDialogComponent } from '../../../components/dialogs/add-process-dialog/add-process-dialog.component';
import { ConfirmDialogComponent } from '../../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { ManageProcessService } from '../../../services/cao-admin-services/manage-process.service';
import { ErrorService } from '../../../services/error/error.service';
import { Process } from './process-list-model/process-list-model';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  displayedColumns = ['id', 'code', 'name', 'processType', 'action'];
  isLoaded = false;
  public recordCount: any;
  dataSource: MatTableDataSource<Process>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  message: any;
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {}

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public manageProcessService: ManageProcessService,
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
    let dialogRef = this.dialog.open(AddProcessDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.isLoaded = true;
      this.ngOnInit();
    });
  }// end:openDialog

  ngOnInit() {
    this.manageProcessService.getAllProcessConfig().subscribe(res => {
      this.isLoaded = false;
      this.recordCount = res.length;
      console.log(this.recordCount);
      this.dataSource = new MatTableDataSource<Process>(res);
        this.dataSource.paginator = this.paginator;
    });
  }// end:ngOnInit

  deleteProcess(processobj) {
    console.log(processobj.id);
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        // data: processobj
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === true){
          this.isLoaded = true;
          this.manageProcessService.deleteProcess(processobj.id).subscribe(res => {
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

  }// end:deleteProcess

  editProcess(processobj) {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddProcessDialogComponent, {
      width: '600px',
      data: processobj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.ngOnInit();
    });

  }

}

