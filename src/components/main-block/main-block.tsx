import React from 'react';
import {useSelector} from 'react-redux';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import {blockchainDataSelector} from '../../selectors/blockchain';

import {blockchainMainFields} from '../../types/blockchain';

import {selectedTickerSelector, tickerDataSelector} from '../../selectors/ticker';

import {blockFormatters} from '../../utils/block-formatters';

import styles from './main-block.module.css';

type MainBlockProps = unknown;

export const MainBlock: React.FC<MainBlockProps> = () => {
    const blockchainData = useSelector(blockchainDataSelector);
    const tickerData = useSelector(tickerDataSelector);
    const ticker = useSelector(selectedTickerSelector);

    if (!blockchainData) {
        return null;
    }

    return (
        <div className={styles.blockchainMainData}>
            {
                blockchainMainFields.map(({ name, title }) => {
                    const blockFormatter = blockFormatters[name];
                    const value = blockchainData[name] as string|number;

                    return (
                        <GridRow gutter={0} key={title}>
                            <GridCol>{title}</GridCol>
                            <GridCol className={styles.blockValue}>{blockFormatter ? blockFormatter(value, ticker, tickerData) : value}</GridCol>
                        </GridRow>
                    );
                })
            }
        </div>
    );
};
