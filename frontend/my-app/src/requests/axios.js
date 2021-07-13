import axios from 'axios';
const apiBaseURL = 'http://localhost:3000/api/'

export const GET = url => {
    return axios.get(`${apiBaseURL}/${url}`);
}

// if need for headers etc.

// const headers = 'some headers';

export const POST = (url, data) => {
    return axios(`${apiBaseURL}/${url}`, {
        method: 'POST',
        // headers,
        data,
    });
}

