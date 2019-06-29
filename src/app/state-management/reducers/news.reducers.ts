import { Article } from '../../models/article.model';
import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function menuReducer(state: Article[] = [], action) {
  switch (action.type) {
    case '[Menu] All articles':
        return [...state, action.payload];
    case '[Menu] Tagged articles':
    	console.log('state: ', state);
    	console.log('action', action);
    	return [...state, action.payload];
    default:
        return state;
    }
}
