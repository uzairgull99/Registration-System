import { userConstants } from "../actions/constants";

const initState = {
    loading: false,
    error: null,
    message: ''
};

export default (state = initState, action) => {

    console.log(action);

    switch (action.type) {
        case userConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading:false,
                message:action.payload.message
            }
            break;
            case userConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                loading:false,
               error:action.payload.error
            }
            break;
    }

    return state;
}