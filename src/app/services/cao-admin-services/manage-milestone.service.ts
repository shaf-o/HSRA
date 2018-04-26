import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';

@Injectable()
export class ManageMilestoneService {
    private options: RequestOptions;
    private headers: Headers;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllMilestoneConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.milestone, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllMilestoneConfig

    createMilestone(milestoneObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(envConfig.appURL.createMilestone, milestoneObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:createMilestone

    updateMilestone(milestoneObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.put(envConfig.appURL.updateMilestone + '/' + milestoneObj.id, milestoneObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:updateMilestone

    deleteMilestone(milestoneId) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.delete(envConfig.appURL.deleteMilestone + '/' + milestoneId, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:deleteMilestone
}
