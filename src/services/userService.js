import axios from 'axios'

const getServiceUsers = async () => {
    let users = await axios.get('/user');
    return  users;
};

const createServiceUser = async (data) => {
    let users = await axios.post('/user', data)
    return users;
};

const deleteServiceUser = async (id) => {
    let users = await axios.delete(`/user/${id}`)
    return users;
}

const updateServiceUser = async (id,data) => {
    let users = await axios.put(`/user/${id}`, data)
    return users;
};


export {getServiceUsers, createServiceUser, deleteServiceUser, updateServiceUser}