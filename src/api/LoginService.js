import axios from "axios";

const authUrl = "/auth";

const loginApi = async (data) => {
    let token = await axios.post(authUrl, data);
    return token;

};


export { loginApi };