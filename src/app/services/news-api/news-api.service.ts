import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private API_KEY = 'ea6a2c26cb2f4d9f956c784934dd1e3f';

  constructor(
    private http: HttpClient
  ) { }

  public getNewsAbout(tag) {
    const url = `https://newsapi.org/v2/top-headlines?q=${tag}&apiKey=` + this.API_KEY;

    return this.http
      .get<any>(url)
      .pipe(
        map(data => {
          _.forEach(data.articles, (article) => {
            article.tag = tag;
          });

          return data.articles;
        })
      );
  }
}
