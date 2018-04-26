import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';

@Injectable()
export class ManageMappingChecklistMilestoneService {
    private options: RequestOptions;
    private headers: Headers;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllMappingChecklistMilestoneConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getAllMappingChecklistMilestone, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllMappingChecklistMilestoneConfig

    updateMappingChecklistMilestone(mappingObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.put(envConfig.appURL.updateMappingChecklistMilestone, mappingObj, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:updateMappingChecklistMilestone

}
