import { createAction, props } from '@ngrx/store';

export const allArticles = createAction('[Menu] All articles');

export const taggedArticles = createAction(
  '[Menu] Tagged articles',
  props<{ tag: string; }>()
);

export const savedArticles = createAction('[Menu] Saved articles');
