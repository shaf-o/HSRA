import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { LoginService } from '../../services/auth/login.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public version: string = environment.VERSION;
  private isValidError: boolean;
  isLoggingIn = false;
  constructor (
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService
  ) {

  }

  ngOnInit() {
    this.isValidError = false;
  }

  login() {
    this.isLoggingIn = true;
    this.storageService.removeCredentials();
    this.loginService.loginUser().subscribe((res) => {
      console.log('Login Response', res);
      if (res.type === 'error') {
        this.isValidError = true;
        this.storageService.removeCredentials();
        console.error('Login Error: ', res);
      } else if (res.hasOwnProperty('errorCode')) {
        this.isValidError = true;
        this.storageService.removeCredentials();
        console.error('Login Error: ', res);
      } else {
        console.log('Success Response contains: ', res);
        this.storageService.storeCredentials(res);
        this.router.navigateByUrl('/home');
      }
    },
      (error) => {

      });
  }

}
