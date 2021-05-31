import { ClientServices, Services } from '../types/services';

export const getClientServices = (services: Services) =>
    Object.entries(services).reduce((clientServices, service): ClientServices => {
        const [key, value] = service;

        return {
            ...clientServices,
            [key]: value,
        };
    }, {} as ClientServices);
