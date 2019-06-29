import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, EMPTY } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
// import { MoviesService } from './movies.service';
import { ArticleService } from '../../services/article/article.service';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/do';

import * as ArticleActions from '../actions/article/article.actions';

@Injectable()
export class ArticleEffects {

  @Effect()
  createArticle$: Observable<Action> = this.actions$.pipe(
   ofType('[Article] Save'),
   mergeMap(article =>
   this.articleService.getAll()
      .pipe(
       map(articles => ({ type: '[Article] Saved', payload: [] }))
      )
   )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}
