import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LogoutService } from '../auth/logout.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorService {

  constructor(public snackBar: MatSnackBar, private logoutService: LogoutService, public router: Router) { }
  errorMessage(data) {
    let parseBody:any;
    if (data.status === 401) {
      this.snackBar.open('Unauthorized User', 'Close', {
        duration: 7000
      });
      this.logoutService.logOut()
      .subscribe(response => {
        this.router.navigateByUrl('');
      });

     } else if (data.status >= 400 && data.status < 500 ) {
      parseBody = JSON.parse(data._body);
      if (parseBody.generalMessage === '') {
        this.snackBar.open('Something went wrong! Please try after sometime.', 'Close', {
          duration: 7000
        });
      } else {
        this.snackBar.open(parseBody.generalMessage, 'Close', {
          duration: 7000
        });
      }

     } else if (data.status === 500 ) {
      if (parseBody.generalMessage === '') {
        this.snackBar.open('Something went wrong! Please try after sometime.', 'Close', {
          duration: 7000
        });
      } else {
        this.snackBar.open(parseBody.generalMessage, 'Close', {
          duration: 7000
        });
      }
      this.logoutService.logOut()
      .subscribe(response => {
        this.router.navigateByUrl('');
      });

     } else {
      const parseBody = JSON.parse(data._body);
      if (parseBody.generalMessage === '') {
        this.snackBar.open('Something went wrong! Please try after sometime.', 'Close', {
          duration: 7000
        });
      } else {
        this.snackBar.open(parseBody.generalMessage, 'Close', {
          duration: 7000
        });
      }
     }
  }
}
