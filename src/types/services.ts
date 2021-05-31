import { Method } from 'axios';

export type ServiceConfig = {
    method: Method;
    path: string;
};

type ApiGroup<T extends Record<string, ServiceConfig>> = T;

export type Services = {
    blockchainData: ApiGroup<{
        getSingleBlock: ServiceConfig;
        getSingleTransaction: ServiceConfig;
        getSingleAddress: ServiceConfig;
        getTicker: ServiceConfig;
    }>;
};

export type ClientServices = {
    [K in keyof Services]: { [E in keyof Services[K]]: ServiceConfig };
};
