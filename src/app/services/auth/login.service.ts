import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
import * as envConfig from './../constants/env.endpoints';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from '../storage/storage.service';
import { RestServices } from '../rest.service';
import { HttpClient } from '@angular/common/http';
// import * as envConfig from './../constants/env.endpoints';


@Injectable()
export class LoginService {
  private headers: Headers;
  private options: RequestOptions;
  // To communicate between ReportManagement and Dashboard
  private messageData = new BehaviorSubject<any>({});
  // This is called in parent component as .subscribe
  currentData = this.messageData.asObservable();

  constructor(
    private http: Http,
    private localStorage: LocalStorageService,
    private router: Router,
    private storageService: StorageService,
    private restServices: RestServices,
    private httpClient: HttpClient,
  ) {
    this.headers = this.getClientHeaderParamsWithoutSessionID();
    this.options = new RequestOptions({ headers: this.headers });
  }// end:constructor

  loginUser() {
    this.storageService.removejSessionCookie();
    return this.http.get(envConfig.appURL.loginLDAP, this.options)
      .map(res => {
        return res.json();
      })
      .catch((error) => {
        return Observable.of(JSON.parse(error._body));
        // return Observable.of(error);
      });
  }// end:loginUser

  setRoleId(roleObj: any) {
    this.storageService.updateCredentialsWithRole(roleObj);
    // const sessionId = this.storageService.getSessionId();
    const payload = this.storageService.retrieveCredentials();
    this.headers = this.getHeaderParams();
    this.options = new RequestOptions({ headers: this.headers });
    return this.http.put(envConfig.appURL.selectedRole, payload, this.options)
      .map(res => {
        // this.storageService.updateCredentialsWithRole(roleObj);
        // this.storageService.storeCredentialsSwitchRole(res);
        return res;
      })
      .catch((error) => {
        return Observable.of(error);
      });
  }// end: setRoleId

  // NOTE: This is used only for LDAP login
  getClientHeaderParamsWithoutSessionID() {
    return new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    });
  }// end:getClientHeaderParamsWithoutSessionID

  getHeaderParams(): Headers {
    const sessionId = this.storageService.getSessionId();
    if (!sessionId) {
      console.log('session invalid');
      this.router.navigateByUrl('/login');
    } else {
      // console.log('Session ID: ', sessionId);
      return new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'sessionId': sessionId,
        'Cache-control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
      });
    }
  }// end:getHeaderParams

  getFileUploadHeaderParams(): Headers {
    const sessionId = this.storageService.getSessionId();
    if (!sessionId) {
      console.log('session invalid');
      this.router.navigateByUrl('/login');
    } else {
      // console.log('Session ID: ', sessionId);
      return new Headers({
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'multipart/form-data',
        // 'Accept': 'application/json',
        'sessionId': sessionId,
        // 'Cache-control': 'no-cache',
        // 'Pragma': 'no-cache',
        // 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
      });
    }
  }// end:getHeaderParams

}// end:LoginService
