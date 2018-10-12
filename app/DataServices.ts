import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

@Injectable()
export class DataServices {
  constructor(private http: HttpClient) { }

  private menusUrl = 'app/menu.json';  // URL to web API


  GetMenuLinks() {
    return this.http.get<string>(this.menusUrl).pipe(
      debounceTime(100),
      distinctUntilChanged(),
      catchError(this.handleError<string>("GetMenuLink"))
    );
  }


  private handleError<T>(operation = 'operation', error?: T) {
    return (error: any): Observable<T> => {
      console.error(`error: ${error.message}`);
      return of(error as T);
    };
  }
}
