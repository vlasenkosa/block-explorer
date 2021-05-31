import qs from 'query-string';
import React from 'react';

export interface ExpandPathParams {
    params?: Record<string, string | number>;
    query?: string | Record<string, any>;
}

export function expandPath(path: string, { params, query }: ExpandPathParams = {}): string {
    let resultUrl = path;
    let stringQuery: string | undefined;

    if (typeof query === 'string' || query === undefined) {
        stringQuery = query;
    } else {
        stringQuery = qs.stringify(query, { arrayFormat: 'none' });
    }

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            resultUrl = resultUrl.replace(new RegExp(`{${key}\\??}`), String(value));
        });
    }
    resultUrl = resultUrl.replace(/\/{.+\?}/g, '');

    return stringQuery
        ? `${resultUrl}${stringQuery.startsWith('?') ? '' : '?'}${stringQuery}`
        : resultUrl;
}

export const isArrayWithItems = <T>(arr?: T[] | void | null | any): arr is T[] =>
    Array.isArray(arr) && arr.length > 0;

const ENTER_KEY_CODE = 13;

export const isEnterKeyPressed = ({keyCode}: React.KeyboardEvent): boolean => (ENTER_KEY_CODE === keyCode);

export const getNavigationPages = (currentPage: number, prevPagesNumber: number, nextPagesNumber: number, maxPage: number): number[] => {
    let firstPageNumber = currentPage;
    let lastPageNumber = currentPage;
    let tempCurrentPage = currentPage;

    while (prevPagesNumber !== 0 && (tempCurrentPage - 1) >= 1) {
        firstPageNumber -= 1;
        prevPagesNumber-= 1;
        tempCurrentPage -= 1;
    }

    tempCurrentPage = currentPage;
    while (nextPagesNumber !== 0 && (tempCurrentPage + 1) <= maxPage) {
        lastPageNumber += 1;
        nextPagesNumber-= 1;
        tempCurrentPage += 1;
    }

    if (prevPagesNumber && (lastPageNumber + prevPagesNumber) <= maxPage) {
        lastPageNumber +=prevPagesNumber;
    }

    if (nextPagesNumber && (firstPageNumber + nextPagesNumber) >= 1 && (firstPageNumber + nextPagesNumber) <= maxPage) {
        firstPageNumber -=nextPagesNumber;
    }

    let pages = [];

    for (let i = firstPageNumber; i <= lastPageNumber; i++) {
        pages.push(i)
    }

    return pages;
};
