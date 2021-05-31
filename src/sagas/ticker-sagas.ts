import { call, put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import { fetchTicker } from '../actions/ticker';
import { TickerData } from '../types/api/blockchain-data-api';
import { Api, ResponseType } from '../utils/client-api-factory';
import { TickerBaseTypes } from '../types/blockchain';

export function* fetchTickerAsync(
    api: Api
) {
    try {
        const response: ResponseType<TickerData> = yield call(
            api.blockchainData.getTicker,
            {
                    params: {
                        base: TickerBaseTypes.BTC
                    },
                }
        );

        yield put(fetchTicker.success(response.data));
    } catch (error) {
        yield put(fetchTicker.failure(error.response?.data?.message || error.message));
    }
}

export function* watchTickerSagas(api: Api) {
    yield takeEvery(getType(fetchTicker.request), fetchTickerAsync, api);
}
