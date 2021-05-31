import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import IconButton from 'arui-feather/icon-button';
import IconArrowLeft from 'arui-feather/icon/ui/arrow-left';
import IconArrowRight from 'arui-feather/icon/ui/arrow-right';

import { navigationChangePage} from "../../actions/navigation";

import {currentPageSelector, maxPageSelector} from '../../selectors/navigation';

import { getNavigationPages } from '../../utils/common-utils';

import styles from './navigation-block.module.css';

type NavigationBlockProps = unknown;

const NEXT_VISIBLE_PAGES_NUMBER = 2;
const PREV_VISIBLE_PAGES_NUMBER = 2;

export const NavigationBlock: React.FC<NavigationBlockProps> = () => {
    const put = useDispatch();
    const currentPage = useSelector(currentPageSelector);
    const maxPage = useSelector(maxPageSelector);

    const pages = getNavigationPages(currentPage, PREV_VISIBLE_PAGES_NUMBER, NEXT_VISIBLE_PAGES_NUMBER, maxPage);

    const handleChangePageClick = useCallback( (pageNumber) => {
        put(navigationChangePage(pageNumber));
    }, [put]);

    const isNotFirstPage = Boolean(currentPage - 1);
    const isNotLastPage = Boolean(maxPage - currentPage);

    const isPossibleSubtractTenPages = Boolean(currentPage - 10 >= 1);
    const isPossibleAddTenPages = Boolean(currentPage + 10 <= maxPage);

    if (!maxPage) {
        return null;
    }

    return (
        <div className={styles.navigation}>
            {
                isNotFirstPage && (
                    <IconButton
                        className={styles.navigationItem}
                        onClick={ () => handleChangePageClick(currentPage - 1)}
                    >
                        <IconArrowLeft/>
                    </IconButton>
                )
            }
            {
                isPossibleSubtractTenPages && (
                    <IconButton
                        className={styles.navigationItem}
                        onClick={ () => handleChangePageClick(currentPage - 10)}
                    >
                        -10
                    </IconButton>
                )
            }
            {
                pages.map((page) => (
                    <IconButton
                        key={ uuidv4() }
                        className={page === currentPage ? styles.navigationItemChecked : styles.navigationItem}
                        onClick={ () => handleChangePageClick(page)}
                    >
                        {page}
                    </IconButton>
                ))
            }
            {
                isPossibleAddTenPages && (
                    <IconButton
                        className={styles.navigationItem}
                        onClick={ () => handleChangePageClick(currentPage + 10)}
                    >
                        +10
                    </IconButton>
                )
            }
            {
                isNotLastPage && (
                    <IconButton
                        className={styles.navigationItem}
                        onClick={ () => handleChangePageClick(currentPage + 1)}
                    >
                        <IconArrowRight/>
                    </IconButton>
                )
            }
        </div>
    );
};
