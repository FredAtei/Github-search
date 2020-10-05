import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public githubUserQuery: string;
  public githubProfile: any;
  public githubRepos: any[];
  public errorMessage: string;

  constructor(private githubService: GithubService) { }


  public searchUser() {
    this.githubService.getProfile(this.githubUserQuery).subscribe()
  }

  ngOnInit(): void {
  }

}
