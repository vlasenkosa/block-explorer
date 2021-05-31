import { getClientServices } from '../get-client-services';

import { ServiceConfig } from '../../types/services';

describe('getClientServices', () => {
    it('should return services', () => {
        const getTicker: ServiceConfig = {
            method: 'get',
            path: '/managers',
        };

        const getSingleBlock: ServiceConfig = {
            method: 'get',
            path: '/clients',
        };

        const services: any = {
            blockchainData: {
                getSingleBlock,
                getTicker,
            },
        };

        const clientServices = {
            blockchainData: {
                getSingleBlock,
                getTicker,
            },
        };

        expect(getClientServices(services)).toEqual(clientServices);
    });
});
