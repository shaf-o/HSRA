import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';

@Injectable()
export class ManageProjectService {
    private options: RequestOptions;
    private headers: Headers;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllProjectConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getAllProject, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllProjectConfig

    // getAllProjectTypeConfig() {
    //     this.headers = this.loginService.getHeaderParams();
    //     this.options = new RequestOptions({ headers: this.headers });
    //     return this.http.get(envConfig.appURL.getAllProjectType, this.options)
    //         .map(res => {
    //             return res.json();
    //         })
    //         .catch((error) => {
    //             return Observable.of(error._body);
    //         });
    // }// end:getAllProjectTypeConfig

    createProject(projectObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(envConfig.appURL.createProject, projectObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:createProject

    updateProject(projectObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.put(envConfig.appURL.updateProject + '/' + projectObj.id, projectObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:updateProject

    deleteProject(projectId) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.delete(envConfig.appURL.deleteProject + '/' + projectId, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:deleteProject
}
