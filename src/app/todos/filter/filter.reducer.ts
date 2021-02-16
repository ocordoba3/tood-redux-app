import { createReducer, on } from '@ngrx/store';
import { setFilter, filterAllow } from './filter.actions';

export const initialState: filterAllow = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state: filterAllow, { filter }) => filter)
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}