import { BlockFormatter, EN_LOCALE } from '../../types/blockchain';

export const formatNumberTransaction: BlockFormatter = (numberTransactions) =>
    numberTransactions.toLocaleString(EN_LOCALE);
