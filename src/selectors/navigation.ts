import { ApplicationState } from '../reducers';

export const currentPageSelector = (state: ApplicationState) => state.navigation.currentPage;
export const transactionOnPageSelector = (state: ApplicationState) => state.navigation.transactionOnPage;
export const maxPageSelector = (state: ApplicationState) => state.navigation.maxPage;
