import axios from 'axios'
const baseUrl = '/user'

const getUsers = async () => {
    // let token = sessionStorage.getItem("auth-token");
    let users = await axios.get(baseUrl);

    return  users;
};
export {getUsers}