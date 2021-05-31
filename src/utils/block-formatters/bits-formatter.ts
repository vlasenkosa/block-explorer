import { BlockFormatter, EN_LOCALE } from '../../types/blockchain';

export const formatBits: BlockFormatter = (bits) =>
    bits.toLocaleString(EN_LOCALE);
