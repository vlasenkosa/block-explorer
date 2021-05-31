import { BlockFormatter } from '../../types/blockchain';
import { formatBlockDate } from '../date-utils';

export const formatTimestamp: BlockFormatter = (timestamp) =>
    formatBlockDate(timestamp as number);
