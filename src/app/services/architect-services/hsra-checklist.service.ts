import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';

@Injectable()
export class HSRAChecklistService {
    private options: RequestOptions;
    private headers: Headers;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**
     * Get all Checklist Items under a specific Milestone. Also need to Project's Release's verison Id
     * @param number milestoneId
     * @param number projectVersionId
     * @returns Obserable
     */
    getChecklistItemsUnderMilestone(milestoneId: number, projectVersionId: number) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        // tslint:disable-next-line:max-line-length
        return this.http.get(`${envConfig.appURL.getAllHSRAChecklist}?milestone_id=${milestoneId}&project_version_id=${projectVersionId}`, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllConformanceList

}
