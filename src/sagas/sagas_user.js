import { take, call, put } from "redux-saga/effects";
import {
    START_AUTHENTICATE,
    ERROR_AUTHENTICATE,
    SUCCESS_AUTHENTICATE
} from "../actions/action_index";
import {
    authenticate
} from '../api/user';

export function* authenticatesaga() {
    while (true) {
        const { email, password } = yield take(START_AUTHENTICATE)
        const response = yield call(authenticate, email, password);
        /* Response Status */
        if (response.status) {
            const { data} = response;
            /* Action (yeild put) */
            yield put({
                type: SUCCESS_AUTHENTICATE,
                loggedInUserData: data
            })
        }
        else {
            const { message } = response;
            yield put({
                type: ERROR_AUTHENTICATE,
                message

            })
        }
    }
}