import { BlockFormatter, EN_LOCALE } from '../../types/blockchain';

export const formatSize: BlockFormatter = (size) => (`${size.toLocaleString(EN_LOCALE)} bytes`);
