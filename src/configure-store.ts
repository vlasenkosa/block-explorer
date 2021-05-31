import {
    applyMiddleware,
    createStore,
    Middleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga';

import { getReducers } from './reducers';

import { runSagas } from './sagas';
import { clientApiFactory } from './utils/client-api-factory';
import {getClientServices} from "./utils/get-client-services";
import {services} from "./constants/services";

export const history = createBrowserHistory();

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const middleWares: Middleware[] = [routerMiddleware(history), sagaMiddleware];

    const middleWareEnhancer = applyMiddleware(...middleWares);

    const store = createStore(
        getReducers(history),
        composeWithDevTools(middleWareEnhancer),
    );

    const api = clientApiFactory(getClientServices(services));

    runSagas(sagaMiddleware, api);

    return store;
}