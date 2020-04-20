import { all } from "redux-saga/effects";
import {
    authenticatesaga,
} from './user';

export default function* rootSaga(){
    yield all([
        authenticatesaga()
    ])
}
