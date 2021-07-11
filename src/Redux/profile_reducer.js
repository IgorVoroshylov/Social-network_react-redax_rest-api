import { stopSubmit } from 'redux-form';
import {usersApi, profileApi} from '../crud api/api'

let initialState = {
   postsData: [],
   userProfile: null,
   status: '',
   editMode: false,
   nonExistentUser: false
}

const profileReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'profile/ADD_POST':
         let newPost = {
            id: state.postsData.length + 1,
            message: action.newPostText,
            like: 0
         };
         return {
            ...state,
            postsData: [newPost, ...state.postsData],
            newPostText: ''
            }
      case 'profile/SET_USER':
         return {...state, userProfile: action.profile};
      case 'profile/SET_STATUS':
         return {...state, status: action.status};
      case 'profile/SET_PHOTO':
         return {...state, userProfile: { ...state.userProfile, photos: action.photo }};
      case 'profile/SET_INFO':
         return {...state, userProfile: { ...state.userProfile, ...action.newInfo }};
      case 'profile/SET_EDITMODE':
         return {...state, editMode: action.mode};
      case 'profile/SET_EXISTENTUSER':
         return {...state, nonExistentUser: action.mode};
      default:
         return state;
   }
}

export const addPost = (newPostText) => ({type: 'profile/ADD_POST', newPostText});
export const setUserProfile = (profile) => ({type: 'profile/SET_USER', profile});
export const setUserStatus = (status) => ({type: 'profile/SET_STATUS', status});
export const setUserPhotos = (photo) => ({type: 'profile/SET_PHOTO', photo});
export const setUserInfo = (newInfo) => ({type: 'profile/SET_INFO', newInfo});
export const setEditMode = (mode) => ({type: 'profile/SET_EDITMODE', mode});
export const setNonExistentUser = (mode) => ({type: 'profile/SET_EXISTENTUSER', mode});


export const setUserProfileThunkCreator = (userId) => (dispatch) => {
   usersApi.userProfile(userId)
      .then(data => {
            dispatch(setUserProfile(data));
            dispatch(setNonExistentUser(false))
      })
      .catch(error => {
         if (error.response) {
           console.log(error.response);
           dispatch(setNonExistentUser(true));
         }
      })
}

export const setUserStatusThunkCreator = (userId) => (dispatch) => {
   profileApi.getStatus(userId)
      .then(response => {
            dispatch(setUserStatus(response.data));
      });
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
   profileApi.updateStatus(status)
      .then(response => {
         if(response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
         }
      })
      .catch(error => {
         if (error.response) {
           console.log(error.response);
         }
      })
}

export const setPhotoThunk = (file) => (dispatch) => {
   profileApi.savePhoto(file)
      .then(data => {
         dispatch(setUserPhotos(data.photos));
      });
}

export const saveProfileInfoThunk = (profileInfo) => (dispatch, getState) => {
   const id = getState().auth.userId;
   return profileApi.chengeProfileInfo(profileInfo)
   .then(response => {
      if(response.data.resultCode === 0) {
         dispatch(setUserProfileThunkCreator(id));
         dispatch(setEditMode(false));
      } else {
         let action = stopSubmit('editprofile', {_error: response.data.messages})
         dispatch(action);
      }
   })
}

export default profileReducer;
