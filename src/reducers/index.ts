import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { searchBlockReducer, SearchBlockState } from './search-block-reducer';
import { navigationReducer, NavigationState } from './navigation-reducer';
import { tickerReducer, TickerState } from './ticker-reducer';

export type ApplicationState = Readonly<{
    router: RouterState;
    searchBlock: SearchBlockState;
    navigation: NavigationState;
    ticker: TickerState;
}>;

export const getReducers = (history: History) =>
    combineReducers<ApplicationState>({
        router: connectRouter(history),
        searchBlock: searchBlockReducer,
        navigation: navigationReducer,
        ticker: tickerReducer,
    });
