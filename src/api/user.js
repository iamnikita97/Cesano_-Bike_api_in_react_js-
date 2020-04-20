import {post} from '../api';

export function authenticate(email, password){
    return post('/login',{
        // Add data 
        data : {
            user_mobile : email,
            password : password,
            device_type:"2",
            device_token:"12321"
        }
    })
}