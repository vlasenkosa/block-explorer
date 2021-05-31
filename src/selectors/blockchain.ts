import { ApplicationState } from '../reducers';

export const blockchainDataLoadingSelector = (state: ApplicationState) => state.searchBlock.loading;
export const blockchainDataSelector = (state: ApplicationState) => state.searchBlock.data;
export const searchErrorMessageSelector = (state: ApplicationState) => state.searchBlock.errorMessage;
