
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DataServices {
  constructor (private http: Http) {}

  private menusUrl = 'app/menu.json';  // URL to web API


  GetMenuLinks(): Observable<string> {
    return this.http.get(this.menusUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
 
  private extractData(res: Response) :string {
    let body = res.json();
    return  <string>body.data || "";
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
