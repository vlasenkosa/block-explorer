import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from '../actions/navigation';
import { navigationChangePage, navigationInitMaxPage } from '../actions/navigation';

type Actions = ActionType<typeof actions>;

export type NavigationState = {
    currentPage: number;
    maxPage: number;
    transactionOnPage: number;
};

export const TRANSACTION_ON_PAGE = 5;

export const initialState: NavigationState = {
    currentPage: 0,
    maxPage: 0,
    transactionOnPage: TRANSACTION_ON_PAGE
};

export const navigationReducer = createReducer<NavigationState, Actions>(initialState)
    .handleAction(navigationChangePage, (state, action) => ({
        ...state,
        currentPage: action.payload
    }))
    .handleAction(navigationInitMaxPage, (state, action) => ({
        ...state,
        currentPage: 1,
        maxPage: action.payload
    }));
