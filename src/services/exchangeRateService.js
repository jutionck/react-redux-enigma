import axios from 'axios'

const baseUrl = 'https://api.exchangeratesapi.io'

const getServiceLatest = async (date = 'latest') => {
    let latest = await axios.get(`${baseUrl}/${date}`);
    return latest;
};

const getServiceLatestBase = async (currency = 'EUR') => {
    let latest = await axios.get(`${baseUrl}/latest?base=${currency}`);
    return latest;
};

const getServiceLatestBaseChange = async (date = 'latest', currency = 'EUR') => {
    let latest = await axios.get(`${baseUrl}/${date}?base=${currency}`);
    return latest;
};

const getServiceExChangeSymbol = async (symbol = 'USD,GBP') => {
    let latest = await axios.get(`${baseUrl}latest?symbols=${symbol}`);
    return latest;
};


const getServiceHistorical = async (start_at = '2018-01-01', end_at='2018-09-01') => {
    let latest = await axios.get(`${baseUrl}/history?start_at=${start_at}&end_at=${end_at}`);
    return latest;
};

const getServiceHistoricalSymbol = async (start_at = '2018-01-01', end_at='2018-09-01', symbol='ILS,JPY') => {
    let latest = await axios.get(`${baseUrl}/history?start_at=${start_at}&end_at=${end_at}&symbols=${symbol}`);
    return latest;
};

export {
    getServiceLatest,
    getServiceLatestBase,
    getServiceLatestBaseChange,
    getServiceExChangeSymbol,
    getServiceHistorical,
    getServiceHistoricalSymbol
}