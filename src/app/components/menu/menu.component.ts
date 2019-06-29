import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { ArticleService } from '../../services/article/article.service';
import { Store } from '@ngrx/store';

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

    this.store.dispatch({
      type: '[Menu] All articles'
    });
  }

  public selectAllArticles() {
    this.store.dispatch({
      type: '[Menu] All articles'
    });
  }

  public selectArticles(tag) {
    this.store.dispatch({
      type: '[Menu] Tagged articles',
      payload: tag
    });
  }

  public selectStarredArticles() {
    this.store.dispatch({
      type: '[Menu] Saved articles'
    });
  }

}
