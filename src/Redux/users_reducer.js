import {usersApi} from '../crud api/api'

let initialState = {
   usersList: [],
   pageSize: 10,
   totalUserCount: 0,
   currentPage: 1,
   isPreloader: false,
   followingInProgress: []
}

const updateObjectInArray = (items, itemId, ObjPropName, newObjProps) => {
   return items.map(u => {
      if(u[ObjPropName] === itemId) {
         return {...u, ...newObjProps}
      }
      return u;
   })
}

const usersReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'users/FOLLOW':
         return {
            ...state,
            usersList: updateObjectInArray(state.usersList, action.id, 'id', {followed: true})
         }
      case 'users/UNFOLLOW':
         return {
            ...state,
            usersList: updateObjectInArray(state.usersList, action.id, 'id', {followed: false})
         }
      case 'users/SET_USERS':
         return {...state, usersList: [...action.moreUsers]};
      case 'users/SET_CURRENT_PAGE':
         return {...state,
            currentPage: action.page}
      case 'users/SET_All_USERS':
         return {...state,
            totalUserCount: action.allUsers}
      case 'users/TOGGLE_PRELOADER_STATUS':
         return {...state,
            isPreloader: action.status}
      case 'users/TOGGLE_FOLLOWING_PROGRESS':
         return {...state,
            followingInProgress: action.status
            ? [ ...state.followingInProgress, action.id ]
            : state.followingInProgress.filter(id => id !== action.id)
         }
      default:
         return state;
   }
}

export const follow = (id) => ({type: 'users/FOLLOW', id });
export const unFoll = (id) => ({type: 'users/UNFOLLOW', id });
export const setUsers = (moreUsers) => ({type: 'users/SET_USERS', moreUsers });
export const setPage = (page) => ({type: 'users/SET_CURRENT_PAGE', page });
export const setAllUsers = (allUsers) => ({type: 'users/SET_All_USERS', allUsers });
export const setPreloader = (status) => ({ type: 'users/TOGGLE_PRELOADER_STATUS', status });
export const setFollowingInProgress = (status, id) => ({ type: 'users/TOGGLE_FOLLOWING_PROGRESS', status, id });

export const setUsersThunkCreator = (pageSize, pageNumberForMarc=1, pageNumberForStart=1) => {
   return (dispatch) => {
      dispatch(setPage(pageNumberForMarc));
      dispatch(setPreloader(true));
      usersApi.getUsers(pageNumberForStart, pageSize)
      .then(data => {
         dispatch(setPreloader(false));
         dispatch(setUsers(data.items));
         dispatch(setAllUsers(data.totalCount));
      });
   }
}

export const followThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(setFollowingInProgress(true, userId));
      usersApi.follow(userId).then(data => {
         if(data.resultCode === 0) {
            dispatch(follow(userId));
         }
         dispatch(setFollowingInProgress(false, userId));
      })
   }
}

export const unFollowThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(setFollowingInProgress(true, userId));
      usersApi.unFollow(userId).then(data => {
         if(data.resultCode === 0) {
            dispatch(unFoll(userId));
         }
         dispatch(setFollowingInProgress(false, userId));
      })
   }
}

export default usersReducer;