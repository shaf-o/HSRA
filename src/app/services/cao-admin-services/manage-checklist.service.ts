import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';
import { ChecklistUploadInstance, ChecklistUpload } from '../../components/checklist-list/checklist-list-model/checklist-list-model';

@Injectable()
export class ManageChecklistService {
    private options: RequestOptions;
    private headers: Headers;
    private checklistUploadData:ChecklistUpload;
    constructor(
        private http: Http,
        private loginService: LoginService
    ) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllChecklistConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getAllChecklist, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllChecklistConfig

    getAllChecklistGroupConfig() {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getAllChecklistGroup, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
    }// end:getAllChecklistGroupConfig

    createChecklist(inputForm:FormData) {
        this.headers = this.loginService.getFileUploadHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        // this.checklistUploadData = checklistObj.getInstance();
        return this.http.post(envConfig.appURL.createChecklist, inputForm, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:createChecklist

    createChecklistGroup(groupObj) {
        this.headers = this.loginService.getFileUploadHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        // this.checklistUploadData = checklistObj.getInstance();
        return this.http.post(envConfig.appURL.createChecklistGroup, groupObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:createChecklist

    updateChecklist(checklistObj) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.put(envConfig.appURL.updateChecklist + '/' + checklistObj.id, checklistObj, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:updateChecklist

    deleteChecklist(checklistId) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.delete(envConfig.appURL.deleteChecklist + '/' + checklistId, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:deleteChecklist

    downloadFile(filename) {
        this.headers = this.loginService.getHeaderParams();
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.downloadFile + '?filename=' + filename, this.options)
            .map(res => {
                return res;
            })
            .catch((error) => {
                return Observable.of(error);
            });
    }// end:deleteChecklist
}
