import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import urlJoin from 'url-join';

import { clientApiFactory, EndpointFetcher } from '../client-api-factory';

import { API_PREFIX } from '../../constants/api';
import { ServiceConfig } from '../../types/services';
import { expandPath } from '../common-utils';

describe('clientApiFactory', () => {
    const mock = new MockAdapter(axios);

    const contextRoot = 'blocklet-block-explorer';
    const prefix = urlJoin(contextRoot, API_PREFIX);

    const getSingleBlock: ServiceConfig = {
        method: 'GET',
        path: '/rawblock/{blockHash}',
    };

    const getTicker: ServiceConfig = {
        method: 'GET',
        path: '/ticker',
    };

    const mockTickerRequest = {
        base: 'BTC',
    };

    const mockTickerResponse = {
        'USD': {
            last: 38000
        }
    };

    const mockBlockHash = '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa';
    const mockBlockResponse = {
        hash: mockBlockHash,
        height: 662463
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const services: any = {
        blockchainData: {
            getSingleBlock,
            getTicker,
        },
    };

    const api = clientApiFactory(services, contextRoot) as Record<
        string,
        Record<string, EndpointFetcher>
    >;

    describe('api factory work', () => {
        it('should return valid api object', () => {
            const apiExample = {
                blockchainData: {
                    getSingleBlock: api.blockchainData.getSingleBlock,
                    getTicker: api.blockchainData.getTicker,
                },
            };

            expect(api).toEqual(apiExample);
        });
    });

    describe('responses with HTTP successful code', () => {
        beforeAll(() => {
            mock.onGet(urlJoin(prefix, getTicker.path), { params: mockTickerRequest }).reply(
                200,
                mockTickerResponse,
            );
            mock.onGet(
                expandPath(urlJoin(prefix, getSingleBlock.path), { params: { blockHash: mockBlockHash } }),
            ).reply(200, mockBlockResponse);
        });

        afterAll(() => {
            mock.reset();
        });

        it('should return GET 200 response with params', async () => {
            expect(await api.blockchainData.getTicker({ params: mockTickerRequest })).toEqual(
                expect.objectContaining({
                    status: 200,
                    data: mockTickerResponse,
                }),
            );
        });

        it('should return GET 200 response with urlReplaceParams', async () => {
            expect(await api.blockchainData.getSingleBlock({ urlReplaceParams: { blockHash: mockBlockHash } })).toEqual(
                expect.objectContaining({
                    status: 200,
                    data: mockBlockResponse,
                }),
            );
        });
    });
});
