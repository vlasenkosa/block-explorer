import { TickerData, Transaction } from '../types/api/blockchain-data-api';
import {TransactionFieldsTypes, TickerCurrencyTypes} from '../types/blockchain';
import { isArrayWithItems } from './common-utils';

export const getTotalAddressValue = (addresses: Transaction[TransactionFieldsTypes.OUT]): number => {
    if (!isArrayWithItems(addresses)) {
        return 0;
    }

    return addresses.reduce((prev, address) => (prev + address.value), 0);
};

export const deleteCyrillicSymbols = (inputString: string): string => inputString.replace(new RegExp(/[а-яё]/gi), '');

const FORBIDDEN_SYMBOLS_REGEXP = new RegExp(/[.,\s\/|№%#$&@"={})+~`'"^(;<>!_«»[\]*\\]/gi);

export const deleteForbiddenSymbols = (inputString: string, regExp = FORBIDDEN_SYMBOLS_REGEXP): string => inputString.replace(regExp, '');

export const validateBlockHash = (blockHash: string): string => deleteForbiddenSymbols(deleteCyrillicSymbols(blockHash));

export const convertValue = (value: number, ticker: TickerCurrencyTypes, tickerData?: TickerData|null): string => {
    const convertedValueToBTC = parseFloat((value/100000000).toString() || '0');

    if (!tickerData) {
        return convertedValueToBTC.toFixed(8);
    }

    switch (ticker) {
        case TickerCurrencyTypes.USD: {
            return (convertedValueToBTC * (tickerData[ticker].last)).toFixed(2);
        }
        default: {
            return convertedValueToBTC.toFixed(8);
        }
    }
};

export const formatBlockValue = (value: number, ticker: TickerCurrencyTypes, tickerData?: TickerData|null): string =>
    `${convertValue(value, ticker, tickerData)} ${tickerData?.[ticker]?.symbol || TickerCurrencyTypes.BTC}`;
