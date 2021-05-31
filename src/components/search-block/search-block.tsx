import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridRow from 'arui-feather/grid-row';
import Input from 'arui-feather/input';
import Spin from 'arui-feather/spin';
import IconButton from 'arui-feather/icon-button';
import IconSearch from 'arui-feather/icon/action/search';

import { searchBlock } from '../../actions/search-block';

import { blockchainDataLoadingSelector } from '../../selectors/blockchain';

import { isEnterKeyPressed } from '../../utils/common-utils';
import { validateBlockHash } from '../../utils/block-utils';

import styles from './search-block.module.css';

type SearchBlockProps = unknown;

export const SearchBlock: React.FC<SearchBlockProps> = () => {
    const put = useDispatch();
    const blockchainDataLoading = useSelector(blockchainDataLoadingSelector);
    const [searchParameter, changeSearchParameter] = useState('');

    const handleSearchKeyDown = useCallback((event) => {
        if (isEnterKeyPressed(event)) {
            put(searchBlock.request(searchParameter))
        }
    }, [put, searchParameter]);

    const handleSearchClick = useCallback(() => {
        put(searchBlock.request(searchParameter))
    }, [put, searchParameter]);

    const handleChangeSearchParameter = useCallback((value) => {
        changeSearchParameter(validateBlockHash(value));
    }, []);

    const rightAddons = blockchainDataLoading
        ? <Spin visible={true} size="m"/>
        : <IconButton onClick={handleSearchClick} icon={<IconSearch />}/>;

    return (
        <GridRow className={styles.row} gutter={0}>
            <Input
                disabled={blockchainDataLoading}
                value={searchParameter}
                className={styles.searchInput}
                width="available"
                placeholder="Enter a valid bitcoin block hash"
                rightAddons={rightAddons}
                onChange={handleChangeSearchParameter}
                onKeyDown={handleSearchKeyDown}
            />
        </GridRow>
    );
};
