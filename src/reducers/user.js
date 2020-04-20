import {
    ERROR_AUTHENTICATE,
    START_AUTHENTICATE, SUCCESS_AUTHENTICATE
} from '../actions'

const initState = {
    access_token : '',
    isLoading : false,
    isError : false
}

const user = (prevState = initState, action) => {
    switch(action.type){
        case START_AUTHENTICATE : {
            return {
                ...prevState,
                isLoading : true,
                isError : false
            }
        }
        case SUCCESS_AUTHENTICATE : {
            const { access_token } = action;
            return {
                ...prevState,
                isLoading : false,
                isError : false,
                access_token
            }
        }
        case ERROR_AUTHENTICATE : {
            return {
                ...prevState,
                isLoading : false,
                isError:  true
            }
        }
        default : return prevState
    }
}


export default user