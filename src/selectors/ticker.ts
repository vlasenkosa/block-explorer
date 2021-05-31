import { ApplicationState } from '../reducers';

export const tickerDataSelector = (state: ApplicationState) => state.ticker.data;
export const selectedTickerSelector = (state: ApplicationState) => state.ticker.selectedTicker;
