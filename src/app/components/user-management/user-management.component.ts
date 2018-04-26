import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog } from '@angular/material';
import { AddUserDialogComponent } from '../dialogs/add-user-dialog/add-user-dialog.component';
import { ManageUserService } from '../../services/cao-admin-services/manage-user.service';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

    displayedColumns = ['position', 'process', 'processtype', 'action'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        public dialog: MatDialog,
        public manageUserService: ManageUserService
    ) { }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    openDialog() {
        // tslint:disable-next-line:prefer-const
        let dialogRef = this.dialog.open(AddUserDialogComponent, {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
        });
    }
    deleteUser(userobj) {
        this.manageUserService.deleteUser(userobj.id).subscribe(res => {

        },
            (error) => {
                console.error(error)
            });
    }

    ngOnInit() {
        const a = 12;
    }
}

export interface Element {
    emailId: string;
    position: number;
    roleName: string;
    roleId: number;
}

const ELEMENT_DATA: Element[] = [
    { position: 1, emailId: 'sachin.b.n@philips.com', roleName: 'CAO Admin', roleId: 1 },
    { position: 2, emailId: 'sivaraman.padmanabhan@philips.com', roleName: 'Architect', roleId: 2 },
    { position: 3, emailId: 'pramod.jingade@philips.com', roleName: 'BU Owner', roleId: 3 },
    { position: 4, emailId: 'Vignesh.Rajendran@philips.com', roleName: 'CAO Admin', roleId: 1 },
    { position: 5, emailId: 'ashwini.v@philips.com', roleName: 'Architect', roleId: 2 },
];