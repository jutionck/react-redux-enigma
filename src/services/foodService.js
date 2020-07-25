import axios from 'axios'
const baseUrl = '/food'

const getServiceFoods = async () => {
    let foods = await axios.get(baseUrl);
    return  foods;
};


export {getServiceFoods}