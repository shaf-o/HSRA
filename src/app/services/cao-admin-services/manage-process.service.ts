import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';

@Injectable()
export class ManageProcessService {
    private options: RequestOptions;
    private headers: Headers;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllProcessConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getAllProcess, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllProcessConfig

    getAllProcessTypeConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getAllProcessType, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllProcessTypeConfig

    createProcess(processObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(envConfig.appURL.createProcess, processObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:createProcess

    updateProcess(processObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.put(envConfig.appURL.updateProcess + '/' + processObj.id, processObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:updateProcess

    deleteProcess(processId) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.delete(envConfig.appURL.deleteProcess + '/' + processId, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:deleteProcess
}
