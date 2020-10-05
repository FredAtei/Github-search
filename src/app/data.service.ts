import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  userRequest(data) {
    interface ApiResponse {
      name: string;
      login: string;
      html_url: string;
      avatar_url: string;
      public_repos: number;
      created_at: Date;
    }
  }


  getUserProfile() {
    return this.http.get(`https://api.github.com/users/FredAtei?9f6919b52a9e0d7bbd29946300e86b6bf583cce5=' + apiKey`)
  }
}
