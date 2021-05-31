import {TickerData} from './api/blockchain-data-api';

export enum BlockFieldsTypes {
    HASH = 'hash',
    TIMESTAMP = 'time',
    HEIGHT = 'height',
    NUMBER_TRANSACTIONS = 'n_tx',
    MERKLE_ROOT = 'mrkl_root',
    VERSION = 'ver',
    BITS = 'bits',
    WEIGHT = 'weight',
    SIZE = 'size',
    NONCE = 'nonce',
    FEE = 'fee',
    BLOCK_INDEX = 'block_index',
    TRANSACTIONS = 'tx'
}

export const blockchainMainFields: { name: Partial<BlockFieldsTypes>; title: string; }[] = [
    {
        name: BlockFieldsTypes.HASH,
        title: 'Hash'
    },
    {
        name: BlockFieldsTypes.TIMESTAMP,
        title: 'Timestamp'
    },
    {
        name: BlockFieldsTypes.HEIGHT,
        title: 'Height'
    },
    {
        name: BlockFieldsTypes.NUMBER_TRANSACTIONS,
        title: 'Number of Transactions'
    },
    {
        name: BlockFieldsTypes.MERKLE_ROOT,
        title: 'Merkle root'
    },
    {
        name: BlockFieldsTypes.VERSION,
        title: 'Version'
    },
    {
        name: BlockFieldsTypes.BITS,
        title: 'Bits'
    },
    {
        name: BlockFieldsTypes.WEIGHT,
        title: 'Weight'
    },
    {
        name: BlockFieldsTypes.SIZE,
        title: 'Size'
    },
    {
        name: BlockFieldsTypes.NONCE,
        title: 'Nonce'
    },
    {
        name: BlockFieldsTypes.FEE,
        title: 'Fee Reward'
    }
];

export enum TransactionFieldsTypes {
    HASH = 'hash',
    TIMESTAMP = 'time',
    TRANSACTION_HEIGHT = 'block_height',
    FEE = 'fee',
    INPUTS = 'inputs',
    OUT = 'out'
}

export enum AddressTypes {
    OUTPUT = 'output',
    SPENT = 'spent'
}

export enum TickerBaseTypes {
    BTC = 'BTC',
    ETH = 'ETH'
}

export enum TickerCurrencyTypes {
    BTC = 'BTC',
    USD = 'USD',
    AUD = 'AUD',
    BRL = 'BRL',
    CAD = 'CAD',
    CHF = 'CHF',
    CLP = 'CLP',
    CNY = 'CNY',
    DKK = 'DKK',
    EUR = 'EUR',
    GBP = 'GBP',
    HKD = 'HKD',
    INR = 'INR',
    ISK = 'ISK',
    JPY = 'JPY',
    KRW = 'KRW',
    NZD = 'NZD',
    PLN = 'PLN',
    RUB = 'RUB',
    SEK = 'SEK',
    SGD = 'SGD',
    THB = 'THB',
    TRY = 'TRY',
    TWD = 'TWD',
}

export type BlockFormatter = (blockValue: string|number, ticker: TickerCurrencyTypes, tickerData: TickerData|null) => string;

export const EN_LOCALE = 'en-En';
