import { createAction, props } from '@ngrx/store';

export type filterAllow = 'all' | 'finished' | 'unfinished';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter: filterAllow }>()
);
