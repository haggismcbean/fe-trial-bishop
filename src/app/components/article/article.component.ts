import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

import { Article } from '../../models/article.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() public article;

  public isSaved = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(state => {
      if (state) {
        return _.last(state.savedArticles);
      }
    }).subscribe(savedArticles => {
      if (!savedArticles) {
        return;
      }

      this.isSaved = !!_.find(savedArticles.articles, { url: this.article.url });

      console.log(this.isSaved);
    });
  }

  public save(article) {
    this.store.dispatch({
      type: '[Article] Save article',
      payload: article
    });
  }

  public unsave(article) {
    this.store.dispatch({
      type: '[Article] Unsave article',
      payload: article
    });
  }
}
