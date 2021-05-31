import React from 'react';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import { TransactionFieldsTypes } from '../../types/blockchain';
import { Transaction } from '../../types/api/blockchain-data-api';

import { formatBlockDate } from '../../utils/date-utils';

import styles from './transaction-header.module.css';


type TransactionHeaderProps = {
    hash: Transaction[TransactionFieldsTypes.HASH];
    timestamp: Transaction[TransactionFieldsTypes.TIMESTAMP];
};

export const TransactionHeader: React.FC<TransactionHeaderProps> = ({ hash, timestamp }) => {
    return (
        <GridRow className={styles.transactionHeader} gutter={0}>
            <GridCol width={6}>
                <GridRow gutter={0}>
                    <GridCol width={2}>Hash</GridCol>
                    <GridCol width={10} className={styles.hashLink}>
                        <a href={hash} onClick={ (event) => event.preventDefault()}>
                            {hash}
                        </a>
                    </GridCol>
                </GridRow>
            </GridCol>
            <GridCol width={6}>
                <GridRow justify="right" gutter={0}>
                    {formatBlockDate(timestamp)}
                </GridRow>
            </GridCol>
        </GridRow>
    );
};
