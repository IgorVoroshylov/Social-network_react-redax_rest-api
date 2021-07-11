import { stopSubmit } from 'redux-form';
import {authApi, securityAPI} from '../crud api/api'

let initialState = {
   login: null,
   userId: null,
   email: null,
   isAuth:false,
   captchaUrl: null
}

const authReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'auth/SET_USER_DATA':
         return {
            ...state,
            ...action.data
         };
      case 'auth/SET_CAPTCHA':
         return {...state, captchaUrl: action.captcha };
      default:
         return state;
   }
}

export const setUserData = (userId, login, email, isAuth) => ({type: 'auth/SET_USER_DATA', data: {userId, login, email, isAuth } });
export const setCaptchaUrl = (captcha) => ({type: 'auth/SET_CAPTCHA', captcha });

export const setAuthUserThunkCreator = () => (dispatch) => {
   return authApi.setAuth()
   .then(data => {
      if(data) {
         dispatch(setUserData(data.id, data.login, data.email, true));
      }
   })
}

export const loginThunk = (email, password, rememberMe, captcha) => (dispatch) => {
   authApi.login(email, password, rememberMe, captcha)
   .then(respons => {
      if(respons.data.resultCode === 0) {
         dispatch(setCaptchaUrl(null));
         dispatch(setAuthUserThunkCreator());
      } else {
         let action = stopSubmit('login', {_error: respons.data.messages})
         dispatch(action);
         if(respons.data.resultCode === 10) {
            dispatch(getCapchaUrlThunk());
         }
      }
   })
}

export const getCapchaUrlThunk = () => (dispatch) => {
   securityAPI.getCapchaUrl()
   .then(respons => {
      dispatch(setCaptchaUrl(respons.data.url))
   })
}

export const logOutThunk = () => (dispatch) => {
   authApi.logOut()
   .then(respons => {
      if(respons.data.resultCode === 0) {
         dispatch(setUserData(null, null, null, false));
      }
   })
}

export default authReducer;
