import axios from 'axios';

const URL = 'http://localhost:2000'
export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/api/users/register-user`, data)
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}

export const authenticateStudent = async (data) => {
    try {
        const config = {
            headers: {
                authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        return await axios.post(`${URL}/api/students/register-student`, data, config);
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}

export const authenticateInterview = async (data) => {
    try {
        const config = {
            headers: {
                authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        return await axios.post(`${URL}/api/students/interview`, data, config);
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}

export const getInterview = async () => {
    try {
        const config = {
            headers: {
                authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        return await axios.get(`${URL}/api/students/interview-fetch`, config);
    } catch (error) {
        console.log('Error', error.response.data);
    }
}


export const authenticateLogin = async (data) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }
        const result = await axios.post(`${URL}/api/users/login`, data, config);
        // console.log(result.data);
        return result.data;
    } catch (error) {
        console.log('Error while calling login api', error);
        return error.response.data.message;
    }
}

export const deleteInterview = async (data) => {
    try {
        const config = {
            headers: {
                authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        return await axios.post(`${URL}/api/students/destroy/${data.id}`, data, config);
    } catch (error) {
        console.log('Error while calling login api', error);
        return error.response.data.message;
    }
}

export const downloadCsv = async() => {
    try {
        const res = await axios.get(`${URL}/api/students/download`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log('Error', error.response.data);
    }
}



