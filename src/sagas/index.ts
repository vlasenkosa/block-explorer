import { Saga, SagaMiddleware } from 'redux-saga';

import { watchSearchBlockSagas } from './search-block-sagas';
import { watchTickerSagas } from './ticker-sagas';

import { Api } from '../utils/client-api-factory';

export const runSagas = (middleWare: SagaMiddleware, api: Api) => {
    const sagas: Saga[] = [
        watchSearchBlockSagas,
        watchTickerSagas,
    ];

    sagas.forEach((saga) => middleWare.run(saga, api));
};
