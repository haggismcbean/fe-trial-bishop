import { createAction } from '@ngrx/store';

export const save = createAction('[Article] Save');
export const unsave = createAction('[Article] Unsave');

export const saved = createAction('[Article] Saved');
export const unsaved = createAction('[Article] Unsaved');
