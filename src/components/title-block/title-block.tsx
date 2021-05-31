import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import RadioGroup from 'arui-feather/radio-group';
import Radio from "arui-feather/radio";
import Paragraph from 'arui-feather/paragraph';

import {HeadingBlock} from '../heading-block';

import {selectTicker} from '../../actions/ticker';

import {blockchainDataSelector} from '../../selectors/blockchain';
import {selectedTickerSelector} from '../../selectors/ticker';

import {BlockFieldsTypes, TickerCurrencyTypes} from '../../types/blockchain';

import {formatBlockDate} from '../../utils/date-utils';

import styles from './title-block.module.css';

type TitleBlockProps = unknown;

export const TitleBlock: React.FC<TitleBlockProps> = () => {
    const put = useDispatch();
    const blockchainData = useSelector(blockchainDataSelector);
    const ticker = useSelector(selectedTickerSelector);

    const blockHeight = blockchainData?.[BlockFieldsTypes.HEIGHT];
    const timestamp = blockchainData?.[BlockFieldsTypes.TIMESTAMP];

    const handleChangeTicker = useCallback((value) => {
        put(selectTicker(value));
    }, [put]);

    return (
        <div>
            <GridRow className={styles.rowTitle} justify="between" gutter={0} >
                <GridCol>
                    <HeadingBlock headingText={`Block ${blockHeight}`} popupText={`Block at height ${blockHeight}`}/>
                </GridCol>
                <GridCol>
                    <GridRow justify="right">
                        <RadioGroup
                            className={styles.currency}
                            onChange={handleChangeTicker}
                        >
                            <Radio
                                checked={ticker === TickerCurrencyTypes.USD}
                                value={TickerCurrencyTypes.USD}
                                text={TickerCurrencyTypes.USD}
                                type="button"
                            />
                            <Radio
                                checked={ticker === TickerCurrencyTypes.BTC}
                                value={TickerCurrencyTypes.BTC}
                                text={TickerCurrencyTypes.BTC}
                                type="button"
                            />
                        </RadioGroup>
                    </GridRow>
                </GridCol>
            </GridRow>
            {
                Boolean(timestamp) && (
                    <GridRow justify="left" gutter={0}>
                        <Paragraph>
                            {
                                `This block was mined on ${formatBlockDate(timestamp, 'MMMM dd, yyyy HH:mm')}.`
                            }
                        </Paragraph>
                    </GridRow>
                )
            }
        </div>
    );
};
