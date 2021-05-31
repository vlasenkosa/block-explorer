import { createAction } from 'typesafe-actions';

export const navigationChangePage = createAction(
    'NAVIGATION_CHANGE_PAGE',
)<number>();

export const navigationInitMaxPage = createAction(
    'NAVIGATION_INIT_MAX_PAGE',
)<number>();
