import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';

@Injectable()
export class ManageAssessmentService {
    private options: RequestOptions;
    private headers: Headers;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllConformanceList() {
        // this.headers = this.loginService.getHeaderParams();
        // this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(``)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllConformanceList

}
