import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as envConfig from './../constants/env.endpoints';


@Injectable()
export class DashboardService {
  private options: RequestOptions;
  private headers: Headers;

  /*
  * Creating Observables
  */
  private architectScreenIndex = new BehaviorSubject<number>(0); /** This is the observer */
  architectCurrentScreen$ = this.architectScreenIndex.asObservable(); /** This is the observable */
  constructor(
    private http: Http,
    private loginService: LoginService
  ) {
    this.headers = this.loginService.getHeaderParams();
    this.options = new RequestOptions({ headers: this.headers });
  }

  /**
   * route Architect Screens in Dashboard Page
   * @param screenIndex
   * @returns void
   */
  routeArchitectScreen( screenIndex: number = 0 ): void {
    this.architectScreenIndex.next(screenIndex);
  }

  /**
   * get Dashboard Details of a particular user
   * @returns Obseravable
   */
  getDashboardDetails(): Observable<any> {
    this.headers = this.loginService.getHeaderParams();
    this.options = new RequestOptions({ headers: this.headers });
        return this.http.get(envConfig.appURL.getDashboardDetails, this.options)
            .map(res => {
                return res.json();
            })
            .catch((error) => {
                return Observable.of(error._body);
            });
  }

}
