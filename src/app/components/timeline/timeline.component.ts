import { Component, OnInit } from '@angular/core';

import { NewsApiService } from '../../services/news-api/news-api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit() {
    this.newsApiService
        .getNews()
        .subscribe((news) => {
          console.log('news: ', news);
        });
  }

}
