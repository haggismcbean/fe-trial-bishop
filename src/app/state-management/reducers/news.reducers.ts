import { Article } from '../../models/article.model';
import { Action } from '@ngrx/store';

export function menuReducer(state: Article[] = [], action) {
  switch (action.type) {
    case '[Menu] All articles':
      return [...state, action.payload];
    case '[Menu] Tagged articles':
      return [...state, action.payload];
    case '[Menu] Saved articles':
      return [...state, action.payload];
    case '[Article] Save':
      console.log('so... something was saved?');
      return [...state];
    default:
      return state;
  }
}
