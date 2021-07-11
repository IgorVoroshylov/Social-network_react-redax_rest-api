import {setAuthUserThunkCreator} from '../Redux/auth_reducer'

let initialState = {
   initialized: false
}

const authReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'app/SET_INITIALIZED':
         return {
            ...state,
            initialized: true
         }
      default:
         return state;
   }
}

export const setInitialized = () => ({type: 'app/SET_INITIALIZED' });

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(setAuthUserThunkCreator());
   promise.then(() => {
      dispatch(setInitialized());
   })
}

export default authReducer;
