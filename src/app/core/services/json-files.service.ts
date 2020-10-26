import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class JsonFilesService{

  constructor(private http: HttpClient) { }

  getJsonData(jsonFile: string): Observable<any> {
    return this.http.get(jsonFile)
    .pipe(
      map((res: any) => res.json()),
      catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return throwError(errMsg);
  }
}
