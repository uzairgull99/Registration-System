import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {}
// })