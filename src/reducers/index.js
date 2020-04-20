import {combineReducers} from 'redux';
import user from './user'

const rootReducer = combineReducers({
    user,
});

//use blacklst type of prop only
//it should be at the top level of the prop
// so that it can be blacklisted 

export default rootReducer;