import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() public article;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.store.select(state => {
    //   return _.last(state.articles);
    // });
  }

  public save(article) {
    console.log('saving');
    this.store.dispatch({
      type: '[Article] Save',
      payload: <Article> article
    });
  }
}
