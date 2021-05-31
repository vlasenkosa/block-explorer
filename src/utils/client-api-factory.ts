import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import urlJoin from 'url-join';

import { API_PREFIX } from '../constants/api';
import { ClientServices, ServiceConfig } from '../types/services';
import { expandPath } from './common-utils';

export interface ClientRequestConfig extends AxiosRequestConfig {
    urlReplaceParams?: Record<string, string | number>;
}

export type ResponseType<T> = AxiosResponse<T>;

export type Api = {
    [K in ClientServicesKeys]: Endpoints<K>;
};

export type EndpointFetcher<R = unknown> = (
    requestConfig?: ClientRequestConfig,
) => Promise<AxiosResponse<R>>;

type ClientServicesKeys = keyof ClientServices;
type Endpoints<K extends ClientServicesKeys = ClientServicesKeys> = {
    [E in keyof ClientServices[K]]: EndpointFetcher;
};

const makeEndpointFetcher = ({ path, method }: ServiceConfig, contextRoot: string) => {
    const endpointFetcher: EndpointFetcher = (requestConfig = {}) => {
        const { urlReplaceParams, ...customAxiosConfig } = requestConfig;

        const pathWithParams = urlReplaceParams
            ? expandPath(path, { params: urlReplaceParams })
            : path;
        const pathWithPrefixes = urlJoin(contextRoot, API_PREFIX, pathWithParams);

        const axiosConfig = {
            url: pathWithPrefixes,
            method,
            headers: {
                Cache: 'no-cache',
                ...customAxiosConfig.headers,
            },
            ...customAxiosConfig,
        };

        return axios.request(axiosConfig);
    };

    return endpointFetcher;
};

export const clientApiFactory = (services: ClientServices, contextRoot = '') =>
    Object.entries(services).reduce((api, [serviceName, endpoints]) => {
        const serviceEndpoints = Object.entries(endpoints).reduce(
            (transformedEndpoints, [endpointName, endpointConfig]) => ({
                ...transformedEndpoints,
                [endpointName]: makeEndpointFetcher(endpointConfig, contextRoot),
            }),
            {} as Endpoints,
        );

        return {
            ...api,
            [serviceName]: serviceEndpoints,
        };
    }, {} as Api);
