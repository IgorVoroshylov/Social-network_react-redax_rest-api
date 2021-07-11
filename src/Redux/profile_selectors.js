export const getUserProfile = (state) => {
   return state.profile.userProfile;
}

export const getPostData = (state) => {
   return state.profile.postsData;
}

export const getStatus = (state) => {
   return state.profile.status;
}

export const getUserId = (state) => {
   return state.auth.userId;
}

export const getEditMode = (state) => {
   return state.profile.editMode;
}
export const getNonExistentUserMode = (state) => {
   return state.profile.nonExistentUser;
}