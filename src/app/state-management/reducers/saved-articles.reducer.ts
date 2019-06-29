import { Article } from '../../models/article.model';
import { Action } from '@ngrx/store';

export function savedArticlesReducer(state: Article[] = [], action) {
  switch (action.type) {
    case '[Local Storage] Article save success':
      return [...state, action.payload];
    case '[Local Storage] Article unsave success':
      return [...state, action.payload];
    default:
      return state;
  }
}
