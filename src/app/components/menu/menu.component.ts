import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { ArticleService } from '../../services/article/article.service';
import { Store } from '@ngrx/store';

import { allArticles, taggedArticles, savedArticles } from '../../state-management/actions/menu/menu.actions';

import { AppState } from '../../app.state';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public tags;

  constructor(
    private articleService: ArticleService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.tags = _.keys(this.articleService.TAGS);
  }

  public selectAllArticles() {
    this.articleService
        .getAll()
        .subscribe(articles => {
            this.store.dispatch({
                type: '[Menu] All articles',
                payload: <Article[]> articles
            });
        });
  }

  public selectArticles(tag) {
    this.articleService
        .get(tag)
        .subscribe(articles => {
            this.store.dispatch({
                type: '[Menu] Tagged articles',
                payload: <Article[]> articles,
                props: tag
            });
        });
  }

  public selectStarredArticles() {
    this.articleService
        .getSaved()
        .subscribe(articles => {
            this.store.dispatch({
                type: '[Menu] All articles',
                payload: <Article[]> articles
            });
        });
  }

}
