import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, forkJoin, merge, mergeMap } from 'rxjs';

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
    bitcoin: 'bitcoin',
    world: 'world'
  };

  public articles;

  constructor(
    private newsApiService: NewsApiService
  ) { }

  getAll(): Observable<any[]> {
    const subjects = _.reduce(this.TAGS, (subjectsArray, tag) => {
      subjectsArray.push(this.newsApiService.getNewsAbout(tag));
      return subjectsArray;
    }, []);

    return forkJoin(subjects)
      .pipe(
        map(allSubjects => _.flatten(allSubjects))
      );
  }
}
