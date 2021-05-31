import { BlockFormatter, EN_LOCALE } from '../../types/blockchain';

export const formatNonce: BlockFormatter = (nonce) =>
    nonce.toLocaleString(EN_LOCALE);
