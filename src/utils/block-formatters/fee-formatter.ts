import {BlockFormatter, TickerCurrencyTypes} from '../../types/blockchain';
import {TickerData} from '../../types/api/blockchain-data-api';
import {formatBlockValue} from '../block-utils';

export const formatFee: BlockFormatter = (fee, ticker: TickerCurrencyTypes, tickerData: TickerData|null) => formatBlockValue(fee as number, ticker, tickerData);
