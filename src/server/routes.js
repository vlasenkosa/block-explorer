const express = require('express');
const axios = require('axios');

const router = express.Router();

const BLOCKCHAIN_API_PROTOCOL = 'https';
const BLOCKCHAIN_API_HOST = 'blockchain.info';

const getBlockChainBaseUrl = () => `${BLOCKCHAIN_API_PROTOCOL}://${BLOCKCHAIN_API_HOST}`;

const getBlockChainApiUrl = (apiPath) => `${getBlockChainBaseUrl()}/${apiPath}`;

const logApiRequest = (requestUrl) => console.log('Request URL:', requestUrl);
const logApiResponse = (responseData) => console.log('Response:', responseData);

router.use((req, res, next) => {
    console.log('Time: ', new Date().toLocaleDateString());
    console.log('Request Type:', req.method);
    console.log('Request api URL:', req.originalUrl);
    next();
});

router.use((error, req, res, next) => {
    if (!error.statusCode) error.statusCode = 500;

    return res
        .status(error.statusCode)
        .json({ error: error.toString() });
});

router.get('/rawblock/:blockHash', async (req, res, next) => {
    try {
        const { blockHash } = req.params;
        const url = getBlockChainApiUrl(`/rawblock/${blockHash}`);

        logApiRequest(url);

        const { data: responseData } = await axios.get(url);

        logApiResponse(responseData)

        res.send(responseData);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
});

router.get('/rawtx/:transactionHash', async (req, res) => {
    try {
        const { transactionHash } = req.params;
        const url = getBlockChainApiUrl(`/rawtx/${transactionHash}`);

        logApiRequest(url);

        const { data: responseData } = await axios.get(url);

        logApiResponse(responseData)

        res.send(responseData);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
});

router.get('/rawaddr/:bitcoinAddress', async (req, res) => {
    try {
        const { bitcoinAddress } = req.params;
        const url = getBlockChainApiUrl(`/rawtx/${bitcoinAddress}`);

        logApiRequest(url);

        const { data: responseData } = await axios.get(url);

        logApiResponse(responseData)

        res.send(responseData);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
});

router.get('/ticker', async (req, res) => {
    try {
        const { base } = req.query;
        const url = getBlockChainApiUrl(`/ticker?base=${base}`);

        logApiRequest(url);

        const { data: responseData } = await axios.get(url);

        logApiResponse(responseData)

        res.send(responseData);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
});

module.exports = router;