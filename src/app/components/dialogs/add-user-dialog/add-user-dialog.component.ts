import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { User, UserInstance } from '../../user-management/user-list-model/user-list-model';
import { ManageUserService } from '../../../services/cao-admin-services/manage-user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  private userObj: User;
  private roleList: any;
  private roleObj: any;
  private isEnabled: boolean;
  userInstance: UserInstance;
  formControl = new FormControl();
  constructor(
    public manageUserService: ManageUserService,
    public thisDialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }
  ngOnInit() {
    this.isEnabled = false;
    this.userInstance = new UserInstance();
    this.userObj = this.userInstance.getInstance();
  }
  searchUser(userObj) {
    this.manageUserService.searchUser(userObj.email).subscribe(res => {
      this.isEnabled = true;
      this.manageUserService.getAllRoleConfig().subscribe(result => {
        this.roleList = result;
        this.roleObj = result[0];
      },
        (error) => {
          console.error(error);
        });
    },
      (error) => {
        console.error(error);
      });
  }

  selectedRole(roleObj) {
  }
  onCloseConfirm() {
    const roleObj = {};
    this.manageUserService.createUser(roleObj).subscribe(res => {
      this.thisDialogRef.close('Confirm');
    },
      (error) => {
        console.error(error);
      });
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}