import axios from 'axios'

const getServiceUsers = async () => {
    let users = await axios.get('/user');
    return  users;
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


const updateServiceUser = async (form) => {
    const users = await fetch('/user', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

    return await users.json();
}




export {getServiceUsers, deleteServiceUser, updateServiceUser}