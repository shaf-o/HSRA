import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/auth/logout.service';
import { LoginService } from '../../services/auth/login.service';
import { StorageService } from '../../services/storage/storage.service';
import { DashboardService } from '../../services/architect-services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private userName: String;
  private roleList: any;
  private selectedRole: any;
  private architectScreenIndex: number;
  private isUpcomingDisabled: boolean;
  constructor (
    public snackBar: MatSnackBar,
    private router: Router,
    private logOutService: LogoutService,
    private loginService: LoginService,
    private storageService: StorageService,
    private dashboardService: DashboardService
  ) {
    this.isUpcomingDisabled = false;
   }

  // tslint:disable-next-line:no-trailing-whitespace
  private loadSnackBar() {
    this.userName = this.storageService.getFullName();
    this.snackBar.open(this.userName + ' Logged in Successfully', 'Close', {
      duration: 3000
    });
  }


  switchRole(roleObj) {
    this.selectedRole = roleObj;
    this.loginService.setRoleId(roleObj).subscribe(res => {
    //  console.log(res);
    },
      (error) => {
        console.error(error);
      });
  }

  logout() {
    // this.router.navigateByUrl('');
    this.logOutService.logOut()
      .subscribe(response => {
        this.router.navigateByUrl('');
      });
  }

  onTabChange() {
    this.dashboardService.routeArchitectScreen();
  }

  ngOnInit() {
    this.dashboardService.architectCurrentScreen$.subscribe( screenNumber => {
      this.architectScreenIndex = screenNumber;
    });
    const role = this.storageService.getSelectedRole();
    if (role === null) {
      this.router.navigateByUrl('');

    } else {
      // const role = this.storageService.getSelectedRole();
      this.roleList = this.storageService.getListOfRoles();
      const filteredList = this.roleList.filter((item) => {
        return item.name === role.name;
      });
      this.selectedRole = filteredList[0];

    }

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.loadSnackBar();
    }, 1000);
  }
}

