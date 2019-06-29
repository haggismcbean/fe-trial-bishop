import { Component, OnInit } from '@angular/core';

import { NewsApiService } from '../../services/news-api/news-api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public articles;

  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit() {
    this.newsApiService
        .getNews()
        .subscribe((articles) => {
          this.articles = articles;
        }, (error) => {
          console.log(error);
        });
  }

}
