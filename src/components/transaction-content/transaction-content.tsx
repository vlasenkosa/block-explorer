import React from 'react';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import { RightArrowIcon } from '../icons/transactions/right-arrow-icon';
import { AddressesBlock } from '../addresses-block';

import { AddressTypes, TransactionFieldsTypes } from '../../types/blockchain';
import { Transaction } from '../../types/api/blockchain-data-api';

import styles from './transaction-content.module.css';

type TransactionContentProps = {
    inputs: Transaction[TransactionFieldsTypes.INPUTS];
    out: Transaction[TransactionFieldsTypes.OUT];
};

export const TransactionContent: React.FC<TransactionContentProps> = ({ inputs, out }) => {
    return (
        <GridRow className={styles.transactionContent} gutter={0}>
            <GridCol width={6}>
                <GridRow gutter={0} justify="right">
                    <GridCol width={10}>
                        <AddressesBlock
                            type={AddressTypes.OUTPUT}
                            addressArray={inputs.map((input) => input.prev_out).filter(Boolean)}
                        />
                    </GridCol>
                </GridRow>
            </GridCol>
            <GridCol width={6}>
                <GridRow gutter={0}>
                    <GridCol width={2} className={styles.arrow}>
                        <RightArrowIcon/>
                    </GridCol>
                    <GridCol width={10}>
                        <AddressesBlock
                            type={AddressTypes.SPENT}
                            addressArray={out}
                        />
                    </GridCol>
                </GridRow>
            </GridCol>
        </GridRow>
    );
};
