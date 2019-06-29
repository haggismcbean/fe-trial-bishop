import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, forkJoin, merge } from 'rxjs';

import * as _ from 'lodash';
import * as moment from "moment";

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
        map(allSubjects => {
          const flattenedSubjects = _.flatten(allSubjects);

          flattenedSubjects.sort((articleA, articleB) => {
            articleA.publishedAt = moment(articleA.publishedAt);
            articleB.publishedAt = moment(articleB.publishedAt);

            return articleA.publishedAt.isBefore(articleB.publishedAt) ? 1 : -1;
          });


          return flattenedSubjects;
        })
      );
  }

  get(tag): Observable<any[]> {
    return this.newsApiService.getNewsAbout(tag)
      .pipe(
          map(subjects => {
            subjects.sort((articleA, articleB) => {
              articleA.publishedAt = moment(articleA.publishedAt);
              articleB.publishedAt = moment(articleB.publishedAt);

              return articleA.publishedAt.isBefore(articleB.publishedAt) ? 1 : -1;
            });


            return subjects;
          })
        );
  }

  getSaved(): void {
    // TODO
  }
}
