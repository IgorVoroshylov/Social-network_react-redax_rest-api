import React from 'react'
import { memo } from 'react'
import styles from './profile.module.css';
import MyPosts from './MyPosts/myposts'
import ProfileInfo from './ProfileInfo/profile_info';

const MemoProfileInfo = memo(ProfileInfo);
const MemoMyPosts = memo(MyPosts);

function Profile(props) {
   return (
      <div className={styles.profile}>
         <MemoProfileInfo userProfile={props.userProfile}
                      status={props.status}
                      updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                      isOwner={props.isOwner}
                      setPhotoThunk={props.setPhotoThunk}
                      saveProfileInfoThunk={props.saveProfileInfoThunk}
                      editMode={props.editMode}
                      setEditMode={props.setEditMode}
                      userId={props.userId} />
         
         { props.isOwner && <MemoMyPosts userProfile={props.userProfile} postsData={props.postsData} addPost={props.addPost}/> }
      </div>
   )
}

export default Profile;