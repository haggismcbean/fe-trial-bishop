import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import * as _ from 'lodash';

import { NewsApiService } from '../../services/news-api/news-api.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public TAGS = {
    sport: 'sport',
    business: 'business',
    tech: 'tech',
    entertainment: 'entertainment',
    world: 'world'
  };

  public articles;

  constructor(
    private newsApiService: NewsApiService
  ) { }

  getAll(): Observable<any[]> {
    console.log('getting all!!');
    return this.newsApiService
        .getNewsAbout(null);
  }
}
