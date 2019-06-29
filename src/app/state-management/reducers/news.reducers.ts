import { Article } from '../../models/article.model';
import { Action } from '@ngrx/store';

export function menuReducer(state: Article[] = [], action) {
  switch (action.type) {
    case '[Menu] All articles load success':
      return [...state, action.payload];
    case '[Menu] Tagged articles load success':
      return [...state, action.payload];
    case '[Menu] Saved articles load success':
      return [...state, action.payload];
    case '[News API] Article load success':
      return [...state, action.payload];
    case '[Local Storage] Article load success':
      return [...state, action.payload];
    default:
      return state;
  }
}
