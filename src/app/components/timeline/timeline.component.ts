import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

import * as _ from 'lodash';

import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public articles$ = this.store.select(state => {
    if (state) {
      return _.last(state.articles);
    }
  });

  constructor(
    private store: Store<AppState>,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
  }

}
