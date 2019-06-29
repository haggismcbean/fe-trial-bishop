import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
  ) {
  }

  public saveArticle(article) {
    // TODO - validate url

    return this.getSavedArticles()
      .pipe(
        map((articles) => {
          if (!articles) {
              articles = [];
          }

          articles.push(article);

          console.log('new articles: ', articles);
          localStorage.setItem('articles', JSON.stringify(articles));

          return articles;
        })
      );
  }

  public unsaveArticle(article) {
    return this.getSavedArticles()
      .pipe(
        map((savedArticles) => {
          if (!savedArticles) {
            savedArticles = [];
          }

          _.remove(savedArticles, (savedArticle) => {
            return savedArticle.url === article.url;
          });

          return savedArticles;
        })
      );
  }

  public getSavedArticles(): Observable<any[]> {
    const savedArticles = JSON.parse(localStorage.getItem('articles'));
    return of(savedArticles)
      .pipe(
        map(articles => {
          _.forEach(articles, article => {
              article.publishedAt = moment(article.publishedAt);
          });

          return articles;
        })
      );
  }
}
