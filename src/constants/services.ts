import { Services } from '../types/services';

export const services: Services = {
    blockchainData: {
        getSingleBlock: {
            method: 'get',
            path: '/rawblock/{blockHash}',
        },
        getSingleTransaction: {
            method: 'get',
            path: '/rawtx/{txHash}',
        },
        getSingleAddress: {
            method: 'get',
            path: '/rawaddr/{bitcoinAddress}',
        },
        getTicker: {
            method: 'get',
            path: '/ticker',
        },
    },
};

export default services;