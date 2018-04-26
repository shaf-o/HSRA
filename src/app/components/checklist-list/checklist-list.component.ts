import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AddChecklistDialogComponent } from '../dialogs/add-checklist-dialog/add-checklist-dialog.component';
import { Checklist } from './checklist-list-model/checklist-list-model';
import { ManageChecklistService } from '../../services/cao-admin-services/manage-checklist.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css']
})
export class ChecklistListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'description', 'filename', 'action'];
  isLoaded = false;
  public recordCount: any;
  dataSource: MatTableDataSource<Checklist>;
  @ViewChild( MatPaginator ) paginator: MatPaginator;


  constructor(
    public dialog: MatDialog,
    public manageCheckilistService: ManageChecklistService,
    public snackBar: MatSnackBar,
    public errorService: ErrorService
  ) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  downloadTemplate(filename) {
    console.log('File to be downloaded', filename);
    this.manageCheckilistService.downloadFile(filename).subscribe(res => {
      if (res.status === 200) {
        console.log('Succesfully downloaded: ', res);
        this.ngOnInit();
      } else {
        console.error('Error in downloading filename: ', filename);
      }
    },
      (error) => {
        console.log(error);
      });
  }

  openDialog() {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddChecklistDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.isLoaded = true;
      this.ngOnInit();
    });
  }

  deleteChecklist(checklistobj) {
    console.log('Record to be deleted: ', checklistobj.recordId);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
      this.isLoaded  = true;
        this.manageCheckilistService.deleteChecklist(checklistobj.recordId).subscribe(res => {
          if (res.status === 200) {
            this.ngOnInit();
            this.snackBar.open(' Deleted Successfully', 'Close', {
              duration: 3000
            });
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

  editChecklist(checklistobj) {
        // tslint:disable-next-line:prefer-const
        let dialogRef = this.dialog.open(AddChecklistDialogComponent, {
          width: '600px',
          data: checklistobj
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog closed: ${result}`);
          this.ngOnInit();
        });
  }

  ngOnInit() {
    this.manageCheckilistService.getAllChecklistConfig().subscribe(res => {
      this.recordCount = res.length;
      const filteredResponse: Checklist[] = res.map((element, index) => {
      this.isLoaded  = false;
          return {
            id: index + 1,
            recordId: element.id,
            name: element.name,
            description: element.description ? element.description : 'Not Available',
            filename: element.template ? element.template.name : 'NA',
            url: element.template ? element.template.linkingUri : 'NA'
          };
        });
      this.dataSource = new MatTableDataSource<Checklist>(filteredResponse);
      this.dataSource.paginator = this.paginator;
    });
  }

}
