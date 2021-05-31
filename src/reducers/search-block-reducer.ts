import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from '../actions/search-block';
import { searchBlock } from '../actions/search-block';
import { BlockchainData } from '../types/api/blockchain-data-api';

type Actions = ActionType<typeof actions>;

export type SearchBlockState = {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    errorMessage: string;
    data: BlockchainData | null;
};

export const initialState: SearchBlockState = {
    loading: false,
    loaded: false,
    error: false,
    errorMessage: '',
    data: null,
};

export const searchBlockReducer = createReducer<SearchBlockState, Actions>(initialState)
    .handleAction(searchBlock.request, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: false,
        errorMessage: '',
        data: null,
    }))
    .handleAction(searchBlock.success, (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
    }))
    .handleAction(searchBlock.failure, (state, action) => ({
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
    }));
