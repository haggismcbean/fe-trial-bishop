import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, EMPTY } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as ArticleActions from '../actions/article/article.actions';

import { ArticleService } from '../../services/article/article.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable()
export class ArticleEffects {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private localStorageService: LocalStorageService
  ) {}

  @Effect()
  getAllArticles$: Observable<Action> = this.actions$.pipe(
    ofType('[Menu] All articles'),
    mergeMap(article => {
      return this.articleService
          .getAll()
          .pipe(
            map(articles => ({ type: '[News API] Article load success', payload: articles }))
          );
      }
    )
  );

  @Effect()
  getTaggedArticles$: Observable<Action> = this.actions$.pipe(
    ofType('[Menu] Tagged articles'),
    mergeMap((article: any) => {
      return this.articleService
          .get(article.payload)
          .pipe(
            map(articles => ({ type: '[News API] Article load success', payload: articles }))
          );
      }
    )
  );

  @Effect()
  getSavedArticles$: Observable<Action> = this.actions$.pipe(
    ofType('[Menu] Saved articles'),
    mergeMap((article: any) => {
      return this.localStorageService
          .getSavedArticles()
          .pipe(
            map(articles => ({ type: '[Local Storage] Article load success', payload: articles }))
          );
      }
    )
  );

  @Effect()
  savedArticle$: Observable<Action> = this.actions$.pipe(
    ofType('[Article] Save article'),
    mergeMap((article: any) => {
      return this.localStorageService
          .saveArticle(article.payload)
          .pipe(
            map(articles => ({ type: '[Local Storage] Article save success', payload: articles }))
          );
      }
    )
  );
}
