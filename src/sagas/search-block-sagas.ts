import { call, put, takeEvery, select } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';

import { searchBlock } from '../actions/search-block';
import { GetBlockDataResponse } from '../types/api/blockchain-data-api';
import { Api, ResponseType } from '../utils/client-api-factory';
import {transactionOnPageSelector} from "../selectors/navigation";
import {navigationInitMaxPage} from "../actions/navigation";
import {BlockFieldsTypes} from "../types/blockchain";

export function* searchBlockAsync(
    api: Api,
    { payload: blockHash }: ActionType<typeof searchBlock.request>,
) {
    try {
        const response: ResponseType<GetBlockDataResponse> = yield call(
            api.blockchainData.getSingleBlock,
            {
                    urlReplaceParams: { blockHash },
                }
        );

        const transactionOnPage: ReturnType<typeof transactionOnPageSelector> = yield select(transactionOnPageSelector);

        yield put(navigationInitMaxPage(Math.ceil(response.data[BlockFieldsTypes.NUMBER_TRANSACTIONS] / transactionOnPage)));
        yield put(searchBlock.success(response.data));
    } catch (error) {
        yield put(searchBlock.failure(error.response?.data?.message || error.message));
    }
}

export function* watchSearchBlockSagas(api: Api) {
    yield takeEvery(getType(searchBlock.request), searchBlockAsync, api);
}
