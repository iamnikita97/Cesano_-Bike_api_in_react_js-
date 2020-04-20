import { take, call, put } from "redux-saga/effects";
import {
    START_AUTHENTICATE,
    ERROR_AUTHENTICATE, SUCCESS_AUTHENTICATE
} from "../actions";
import {
    authenticate
} from '../api/user';

export function* authenticatesaga(){
    while(true){
        const { email, password } = yield take(START_AUTHENTICATE)

        // {   
        //     "data": {
        //               "user_mobile":"9039894411",
        //               "password": "123456",
        //               "device_type":"2",
        //               "device_token":"12321"
        //          }
        //   }   
        const response = yield call(authenticate, email, password)
        console.log({response});
        alert(response.status);
        if(response.status){
            const { access_token } = response
            yield put({
                type : SUCCESS_AUTHENTICATE,
                access_token
            })
        }
        else{
            yield put({
                type : ERROR_AUTHENTICATE
            })
        }
        //execute
    }
}