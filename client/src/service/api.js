import axios from 'axios';

const URL = 'http://localhost:3000'
export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/api/users/register-user`, data)
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}


export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/api/users/login`, data);
    } catch (error) {
        console.log('Error while calling login api', error);
        return error.response.data;
    }
}



