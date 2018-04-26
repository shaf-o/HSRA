import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
import * as envConfig from './../../services/constants/env.endpoints';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from '../../services/storage/storage.service';
import { RestServices } from '../../services/rest.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/auth/login.service';
// import * as envConfig from './../constants/env.endpoints';



@Injectable()
export class ProjectDetailsService {
    private options: RequestOptions;
    private headers: Headers;
    private data: any;
    private observable: Observable<any>;
    /**constructor*/
    constructor(
    private http: Http,
    private loginService: LoginService,
  ) { }

  /**
  * TODO: PAJ: Change from Mock to Real Data Service
  */
 getProjectDetails() {
    console.log('getData called');
    if ( this.data ) {
      console.log('data already available');
      // if `data` is available just return it as `Observable`
      return Observable.of(this.data);
    } else if ( this.observable ) {
      console.log('request pending');
      // if `this.observable` is set then the request is in progress
      // return the `Observable` for the ongoing request
      return this.observable;
    } else {
      console.log('send new request');
      // create the request, store the `Observable` for subsequent subscribers
      this.observable = this.http.get('http://161.85.100.209:8080/hsra-dev/assets/data/getAllProjects.json')
      .map ( response =>  {
        console.log('response arrived');
        // when the cached data is available we don't need the `Observable` reference anymore
        this.observable = null;
        if ( response.status === 400) {
          return 'FAILURE';
        } else if ( response.status === 200 ) {
          this.data = response.json();
          return this.data;
        }
        // make it shared so more than one subscriber can get the result
      })
      .share();
      return this.observable;
    }
  }

  getMilestonesPerRelease(id) {
    return this.http.get('http://161.85.100.209:8080/hsra-dev/assets/data/getMilestonePerRelease.json')
    .map ( response => {
        return response.json();
    });
  }

  /**
   * get All Business Unit from the Back end
   * @param any none
   * @returns Observable<any>
   */
  getAllBusinessUnit() {
    this.headers = this.loginService.getHeaderParams();
    this.options = new RequestOptions({ headers: this.headers });
    return this.http.get(envConfig.appURL.getAllBU, this.options)
    .map ( response => {
      return response.json ();
    });
  }

  /**
   * get All Projects under Business Unit
   * @param number Business Unit - id (required)
   * @returns Observable<any>
   */
  getAllProjectsUnderBU (id: number ) {
    this.headers = this.loginService.getHeaderParams();
    this.options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${envConfig.appURL.getAllProject}?bu_id=${id}`, this.options)
    .map ( response => {
      return response.json ();
    });
  }

  /**
   * get All Milestone under a Particular Project's Release Version
   * @param number Release version - id (required)
   * @returns Observable<any>
   */
  getAllMilestonesUnderProject (id: number ) {
    this.headers = this.loginService.getHeaderParams();
    this.options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${envConfig.appURL.milestone}/${id}`, this.options)
    .map ( response => {
      return response.json ();
    });
  }

}// end:ProjectDetailsService
