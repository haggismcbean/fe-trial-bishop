import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as TimelineActions from '../../actions/timeline/timeline.actions';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public articles$: Observable<any[]> = this.store.select(state => {
    console.log('state: ', state);
    return state.articles;
  }).subscribe();

  constructor(
    private store: Store<{ articles: any[] }>
  ) { }

  ngOnInit() {
    this.store.dispatch({ type: TimelineActions.loadNews });
  }

}
