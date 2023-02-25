

//////////// Insuance Anology Reducer function////////////
// const policies=(listofPolicies=[],action)=>{

//     if(action.type==='CREATE_POLICY'){
//         return [...listofPolicies,action.payload];
//     }
//     else if(action.type==='DELETE_POLICY'){
//         return listofPolicies.filter(name=>name!==action.payload.name);
//     }

//     return listofPolicies;
// }


// const rootReducer=(state={'name':"uzair"},action)=>{
//     return state;
// }
// export default rootReducer;



import authReducers from "./auth.reducers";
import userReducers from './user.reducers'

import { combineReducers} from "redux";

const rootReducer=combineReducers({
    auth:authReducers,
    user:userReducers
})

export default rootReducer 