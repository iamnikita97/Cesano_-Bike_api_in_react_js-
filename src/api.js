import axios from 'axios';

const baseURL = 'http://139.59.84.117/cesanobike/api';

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', }
})


function getAccessTokenFromLocalStorage(){
    const { localStorage } = window;
    return localStorage.getItem('token')
}

function setAccessTokenFromLocalStorage(token){
    const { localStorage } = window;
    try{
        localStorage.setItem('token', token);
    }
    catch(error){
        console.error(error.message);
    }
}

function get(url){
    instance.defaults.headers.common['Authorization'] = "Bearer " + getAccessTokenFromLocalStorage();
    return instance.get(url)
    .then(response => {
        if(response.status === 200){
            return response.data
        }
    })
    .catch(error => {
        const { message } = error;
        return ({
            status : false,
            message
        })
    })
}

function post(url, params){
    instance.defaults.headers.common['Authorization'] = "Bearer " + getAccessTokenFromLocalStorage();
    return instance.post( url, params )
    .then(response => {
        if(response.status === 200){
            return response.data
        }
    })
    .catch(error => {
        const { message } = error;
        return ({
            status : false,
            message
        })
    })
}

export {
    get,
    post,
    getAccessTokenFromLocalStorage,
    setAccessTokenFromLocalStorage
}