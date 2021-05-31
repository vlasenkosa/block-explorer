import { BlockFieldsTypes, BlockFormatter } from '../../types/blockchain';
import { formatTimestamp } from './timestamp-formatter';
import { formatNumberTransaction } from './number-transactions-formatter';
import { formatVersion } from './version-formatter';
import { formatBits } from './bits-formatter';
import { formatWeight } from './weight-formatter';
import { formatSize } from './size-formatter';
import { formatNonce } from './nonce-formatter';
import { formatFee } from './fee-formatter';

export const blockFormatters: Partial<Record<
    BlockFieldsTypes,
    BlockFormatter
>> = {
    [BlockFieldsTypes.TIMESTAMP]: formatTimestamp,
    [BlockFieldsTypes.NUMBER_TRANSACTIONS]: formatNumberTransaction,
    [BlockFieldsTypes.VERSION]: formatVersion,
    [BlockFieldsTypes.BITS]: formatBits,
    [BlockFieldsTypes.WEIGHT]: formatWeight,
    [BlockFieldsTypes.SIZE]: formatSize,
    [BlockFieldsTypes.NONCE]: formatNonce,
    [BlockFieldsTypes.FEE]: formatFee,
};
