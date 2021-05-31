import React, {FC, SVGAttributes} from 'react';

import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import {OutputIcon} from "../icons/transactions/output-icon";
import {SpentIcon} from "../icons/transactions/spent-icon";

import {AddressTypes} from '../../types/blockchain';

import styles from './address-item.module.css';
import {useSelector} from "react-redux";
import {selectedTickerSelector, tickerDataSelector} from "../../selectors/ticker";
import {formatBlockValue} from "../../utils/block-utils";

type AddressItemProps = {
    type: AddressTypes;
    address: string;
    value: number;
};

const addressIconComponents: Record<AddressItemProps['type'], FC<SVGAttributes<SVGElement>>> = {
    [AddressTypes.OUTPUT]: OutputIcon,
    [AddressTypes.SPENT]: SpentIcon,
};

export const AddressItem: React.FC<AddressItemProps> = ({ type, address, value }) => {
    const tickerData = useSelector(tickerDataSelector);
    const ticker = useSelector(selectedTickerSelector);
    const IconComponent = addressIconComponents[type];

    return (
        <GridRow justify="right" gutter={0} className={styles.address}>
            <GridCol width={8} className={styles.addressLink}>
                <a href={address} onClick={ (event) => event.preventDefault()}>
                    { address }
                </a>
            </GridCol>
            <GridCol width={4} className={styles.addressValue}>
                {formatBlockValue(value, ticker, tickerData)}
                {/*{`${parseFloat((value/100000000).toString() || '0').toFixed(8)} BTC`}*/}
                <IconComponent className={styles.addressIcon}/>
            </GridCol>
        </GridRow>
    );
};
