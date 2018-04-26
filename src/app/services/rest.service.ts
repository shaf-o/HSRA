import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import 'rxjs/add/observable/of';


@Injectable()
export class RestServices {
    constructor(
        private httpClient: HttpClient
    ) {

    }

    getMethod(url, options) {
        return this.httpClient.get(url, options)
            .pipe(map(res => {
                return res;
            })),
            catchError((error) => {
                return Observable.of(JSON.parse(error._body));
            });
    }//end:getMethod

    postMethod(url, body, options) {
        return this.httpClient.post(url,body,options)
            .pipe(map(res => {
                return res;
            })),
            catchError((error) => {
                return Observable.of(JSON.parse(error._body));
            });
    }//end:postMethod

    putMethod(url, body, options) {
        return this.httpClient.put(url,body,options)
            .pipe(map(res => {
                return res;
            })),
            catchError((error) => {
                return Observable.of(JSON.parse(error._body));
            });
    }//end:putMethod

    deleteMethod(url, options) {
        return this.httpClient.delete(url,options)
            .pipe(map(res => {
                return res;
            })),
            catchError((error) => {
                return Observable.of(JSON.parse(error._body));
            });
    }//end:deleteMethod
}
