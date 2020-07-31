import axios from 'axios'

const getServiceLatest = async (date = 'latest') => {
    let latest = await axios.get(`https://api.exchangeratesapi.io/${date}`);
    return latest;
};

const getServiceLatestBase = async (currency = 'EUR') => {
    let latest = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
    return latest;
};

const getServiceLatestBaseChange = async (date = 'latest', currency = 'EUR') => {
    let latest = await axios.get(`https://api.exchangeratesapi.io/${date}?base=${currency}`);
    return latest;
};

const getServiceExChangeSymbol = async (symbol = 'USD,GBP') => {
    let latest = await axios.get(`https://api.exchangeratesapi.io/latest?symbols=${symbol}`);
    return latest;
};



export {getServiceLatest, getServiceLatestBase, getServiceLatestBaseChange, getServiceExChangeSymbol}