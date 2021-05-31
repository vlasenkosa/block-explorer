import { BlockFormatter } from '../../types/blockchain';

export const formatVersion: BlockFormatter = (version) => (`0x${version.toString(16)}`);
