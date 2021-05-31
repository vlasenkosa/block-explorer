import {createAction, createAsyncAction} from 'typesafe-actions';
import {TickerData} from '../types/api/blockchain-data-api';
import {TickerCurrencyTypes} from "../types/blockchain";

export const fetchTicker = createAsyncAction(
    'FETCH_TICKER_REQUEST',
    'FETCH_TICKER_SUCCESS',
    'FETCH_TICKER_FAILURE',
)<void, TickerData, void>();

export const selectTicker = createAction(
    'SELECT_TICKER_TYPE'
)<TickerCurrencyTypes>();
