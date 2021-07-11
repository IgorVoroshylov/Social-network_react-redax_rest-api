import {createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from './profile_reducer'
import dialogReducer from './dialogs_reducer'
import sidebarReducer from './sidebar_reducer'
import usersReducer from './users_reducer'
import authReducer from './auth_reducer'
import appReducer from './app_reduser'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   profile: profileReducer,
   dialogs: dialogReducer,
   friends: sidebarReducer,
   users: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
//!store.getState() для проверки state в консоле

export default store;