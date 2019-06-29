import { createAction } from '@ngrx/store';

export const open = createAction('[Article] Open');
export const close = createAction('[Article] Close');
export const star = createAction('[Article] Star');
export const unstar = createAction('[Article] Unstar');
