import React, {useCallback, useState} from 'react';

import { v4 as uuidv4 } from 'uuid';

import GridCol from "arui-feather/grid-col";
import GridRow from "arui-feather/grid-row";

import { AddressItem } from '../address-item';

import { AddressTypes } from '../../types/blockchain';
import { Address } from '../../types/api/blockchain-data-api';

import { isArrayWithItems } from '../../utils/common-utils';

type AddressesBlockProps = {
    type: AddressTypes;
    addressArray: Address[];
};

const INITIAL_VISIBLE_ADDRESSES_INDEX = 10;

export const AddressesBlock: React.FC<AddressesBlockProps> = ({ type, addressArray  }) => {
    const [lastVisibleAddressIndex, changeLastVisibleAddressIndex] = useState(INITIAL_VISIBLE_ADDRESSES_INDEX);

    const handleChangeLastVisibleInputsIndex = useCallback((event) => {
        event.preventDefault();
        changeLastVisibleAddressIndex(Math.min(addressArray.length, lastVisibleAddressIndex + INITIAL_VISIBLE_ADDRESSES_INDEX));
    }, [lastVisibleAddressIndex, addressArray.length]);

    if (!isArrayWithItems(addressArray)) {
        return null;
    }

    const visibleAddresses = addressArray.slice(0, lastVisibleAddressIndex);

    const remainedNumberAddresses = Math.max(addressArray.length - lastVisibleAddressIndex, 0);

    return (
        <React.Fragment>
            {
                visibleAddresses.map((address) => (
                    <AddressItem
                        key={uuidv4()}
                        type={type}
                        address={address.addr || ''}
                        value={address.value || 0}
                    />
                ))
            }
            {
                Boolean(remainedNumberAddresses) &&
                <GridRow gutter={0}>
                    <GridCol>
                        <a href='#' onClick={handleChangeLastVisibleInputsIndex}>
                            {`Load more ${type === AddressTypes.OUTPUT ? 'inputs' : 'outputs'}... (${remainedNumberAddresses} remaining)`}
                        </a>
                    </GridCol>
                </GridRow>
            }
        </React.Fragment>
    );
};
