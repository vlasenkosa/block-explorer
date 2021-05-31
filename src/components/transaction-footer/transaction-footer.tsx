import React from 'react';
import {useSelector} from 'react-redux';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import {TransactionFieldsTypes} from '../../types/blockchain';
import {Transaction} from '../../types/api/blockchain-data-api';

import {selectedTickerSelector, tickerDataSelector} from '../../selectors/ticker';
import {formatBlockValue} from '../../utils/block-utils';

import styles from './transaction-footer.module.css';

type TransactionFooterProps = {
    fee: Transaction[TransactionFieldsTypes.FEE];
    totalValue: number;
};

export const TransactionFooter: React.FC<TransactionFooterProps> = ({ fee, totalValue }) => {
    const tickerData = useSelector(tickerDataSelector);
    const ticker = useSelector(selectedTickerSelector);

    return (
        <GridRow className={styles.transactionFooter} gutter={0}>
            <GridCol width={6}>
                <GridRow gutter={0}>
                    <GridCol width={2}>Fee</GridCol>
                    <GridCol width={10}>
                        <GridRow gutter={0}>{formatBlockValue(fee, ticker, tickerData)}</GridRow>
                        {/*<GridRow gutter={0}>{`${parseFloat((fee/100000000).toString() || '0').toFixed(8)} BTC`}</GridRow>*/}
                    </GridCol>
                </GridRow>
            </GridCol>
            <GridCol width={6}>
                <GridRow justify="right" gutter={0}>
                    <span className={styles.transactionTotalValue}>{formatBlockValue(totalValue, ticker, tickerData)}</span>
                    {/*<span className={styles.transactionTotalValue}>{`${parseFloat((totalValue/100000000).toString() || '0').toFixed(8)} BTC`}</span>*/}
                </GridRow>
            </GridCol>
        </GridRow>
    );
};
