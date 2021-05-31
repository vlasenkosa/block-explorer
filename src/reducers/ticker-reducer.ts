import {ActionType, createReducer} from 'typesafe-actions';

import * as actions from '../actions/ticker';
import {fetchTicker, selectTicker} from '../actions/ticker';
import {TickerData} from '../types/api/blockchain-data-api';
import {TickerCurrencyTypes} from '../types/blockchain';

type Actions = ActionType<typeof actions>;

export type TickerState = {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    selectedTicker: TickerCurrencyTypes;
    data: TickerData | null;
};

export const initialState: TickerState = {
    loading: false,
    loaded: false,
    error: false,
    selectedTicker: TickerCurrencyTypes.BTC,
    data: null,
};

export const tickerReducer = createReducer<TickerState, Actions>(initialState)
    .handleAction(fetchTicker.request, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: false,
    }))
    .handleAction(fetchTicker.success, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
    }))
    .handleAction(fetchTicker.failure, () => ({
        ...initialState,
        loading: false,
        error: true,
    }))
    .handleAction(selectTicker, (state, action) => ({
        ...state,
        selectedTicker: action.payload
    }));
