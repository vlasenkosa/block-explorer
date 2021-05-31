import React from 'react';
import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import { HeadingBlock } from '../heading-block';
import { TransactionHeader } from '../transaction-header';
import { TransactionFooter } from '../transaction-footer';
import { TransactionContent } from '../transaction-content';

import { blockchainDataSelector } from '../../selectors/blockchain';
import { currentPageSelector, transactionOnPageSelector } from '../../selectors/navigation';

import { BlockFieldsTypes, TransactionFieldsTypes } from '../../types/blockchain';

import { isArrayWithItems } from '../../utils/common-utils';
import { getTotalAddressValue } from '../../utils/block-utils';

import styles from './transactions-block.module.css';

type TransactionsBlockProps = unknown;

export const TransactionsBlock: React.FC<TransactionsBlockProps> = () => {
    const blockchainData = useSelector(blockchainDataSelector);
    const currentPage = useSelector(currentPageSelector);
    const transactionsOnPage = useSelector(transactionOnPageSelector);
    const transactions = blockchainData?.[BlockFieldsTypes.TRANSACTIONS];

    if (!isArrayWithItems(transactions)) {
        return null;
    }

    const visibleTransactions = transactions.slice((currentPage * transactionsOnPage) - transactionsOnPage, currentPage * transactionsOnPage);

    return (
        <div>
            <HeadingBlock headingText="Block transactions" popupText={`All transactions recorded in Block at height ${blockchainData?.[BlockFieldsTypes.HEIGHT]}`}/>
            {
                visibleTransactions.map((transaction) => (
                    <GridRow className={styles.transaction} gutter={0} key={uuidv4()}>
                        <GridCol>
                            <TransactionHeader
                                hash={transaction[TransactionFieldsTypes.HASH]}
                                timestamp={transaction[TransactionFieldsTypes.TIMESTAMP]}
                            />
                            <TransactionContent
                                inputs={transaction[TransactionFieldsTypes.INPUTS]}
                                out={transaction[TransactionFieldsTypes.OUT]}
                            />
                            <TransactionFooter
                                fee={transaction[TransactionFieldsTypes.FEE]}
                                totalValue={getTotalAddressValue(transaction[TransactionFieldsTypes.OUT])}
                            />
                        </GridCol>
                    </GridRow>
                ))
            }
        </div>
    );
};
