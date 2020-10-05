import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(searchQuery): Observable<any> {
    let dataURL = `https://api.github.com/users/${searchQuery}?access_token=` + environment.ApiKey;
    return this.httpClient.get<any>(dataURL).pipe();

  }

  public getRepos(searchQuery): Observable<any[]> {
    let dataURL = `https://api.github.com/users/${searchQuery}/repos?access_token=` + environment.ApiKey;
    return this.httpClient.get<any[]>(dataURL).pipe();

  }

  public handleErrors(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE :${error.error.message}`;
    }
    else {
      errorMessage = `STATUS :${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);

  };

}
