import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getServiceUsers = async () => {
    let users = await axios.get(baseUrl);
    return  users;
};

const createServiceUser = async (data) => {
    let users = await axios.post(baseUrl, data)
    return users;
};

const updateServiceUser = async (id, data) => {
    let users = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
    return users;
};




export {getServiceUsers, createServiceUser, updateServiceUser}