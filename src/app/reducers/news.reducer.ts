import { Action, createReducer, on } from '@ngrx/store';
import * as NewsActions from '../actions/news/news.actions';

const newsReducer = createReducer(
  on(NewsActions.loaded, state => {
    console.log('dude you did it!');
    return { ...state, articles: 'test' };
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return newsReducer(state, action);
}
