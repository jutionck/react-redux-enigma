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
    const users = await fetch('/user' + `/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return users;
}

const updateServiceUser = async (data) => {
    let users = await axios.put('/user', data)
    return users;
};




export {getServiceUsers, createServiceUser, deleteServiceUser, updateServiceUser}