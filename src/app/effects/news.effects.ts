import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ArticleService } from '../services/article/article.service';

import * as NewsActions from '../actions/news/news.actions';
import * as TimelineActions from '../actions/timeline/timeline.actions';

@Injectable()
export class NewsEffects {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType(TimelineActions.loadNews),
    mergeMap(() => this.articleService.getAll()
      .pipe(
        map(articles => {
          console.log('dude!', articles);
          return ({ type: NewsActions.loaded, payload: 'test' });
        }),
        catchError(() => EMPTY)
      ))
    )
  );
}
