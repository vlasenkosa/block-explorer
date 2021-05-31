import {BlockFieldsTypes, TickerCurrencyTypes, TransactionFieldsTypes} from "../blockchain";

export type BlockchainData = {
    [BlockFieldsTypes.HASH]: string;
    [BlockFieldsTypes.BLOCK_INDEX]: number;
    [BlockFieldsTypes.TIMESTAMP]: number;
    [BlockFieldsTypes.HEIGHT]: number;
    [BlockFieldsTypes.NUMBER_TRANSACTIONS]: number;
    [BlockFieldsTypes.MERKLE_ROOT]: string;
    [BlockFieldsTypes.VERSION]: number;
    [BlockFieldsTypes.BITS]: number;
    [BlockFieldsTypes.WEIGHT]: number;
    [BlockFieldsTypes.SIZE]: number;
    [BlockFieldsTypes.NONCE]: number;
    [BlockFieldsTypes.FEE]: number;
    [BlockFieldsTypes.TRANSACTIONS]: Transaction[];
};

export type Address = {
    value: number;
    addr: string;
};

export type AddressInputs = {
    prev_out: Address;
};

export type AddressOut = Address;

export type Transaction = {
    [TransactionFieldsTypes.HASH]: string;
    [TransactionFieldsTypes.TIMESTAMP]: number;
    [TransactionFieldsTypes.TRANSACTION_HEIGHT]: number;
    [TransactionFieldsTypes.FEE]: number;
    [TransactionFieldsTypes.INPUTS]: AddressInputs[];
    [TransactionFieldsTypes.OUT]: AddressOut[];

}

export type GetBlockDataResponse = BlockchainData;

type Ticker = {
    '15m': number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
}

export type TickerData = Record<TickerCurrencyTypes, Ticker>;
