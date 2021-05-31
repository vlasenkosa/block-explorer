import { BlockFormatter, EN_LOCALE } from '../../types/blockchain';

export const formatWeight: BlockFormatter = (weight) => (`${weight.toLocaleString(EN_LOCALE)} WU`);
