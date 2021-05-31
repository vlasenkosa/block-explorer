import { createAsyncAction } from 'typesafe-actions';
import { BlockchainData } from '../types/api/blockchain-data-api';

export const searchBlock = createAsyncAction(
    'SEARCH_BLOCK_REQUEST',
    'SEARCH_BLOCK_SUCCESS',
    'SEARCH_BLOCK_FAILURE',
)<string, BlockchainData, string>();
