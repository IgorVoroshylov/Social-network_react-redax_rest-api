import React from 'react'
import styles from './profile.module.css';
import Profile from './profile'
import {connect} from 'react-redux';
import { setUserProfileThunkCreator, setUserStatusThunkCreator,
updateUserStatusThunkCreator, addPost, setPhotoThunk, saveProfileInfoThunk, setEditMode } from '../../Redux/profile_reducer'
import Preloader from '../Users/preloader'
import {getUserProfile, getPostData, getStatus, getUserId, getEditMode, getNonExistentUserMode} from '../../Redux/profile_selectors'

class ProfileClassContainer extends React.Component {
   refreshProfile() {
      const props = this.props;
      let userId = props.match.params.userId;
      if(!userId) {
         userId = props.userId;
         if(!userId) {
            props.history.push('/login');
         }
      }
      props.setUserProfileThunkCreator(userId);
      props.setUserStatusThunkCreator(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState) {
      const props = this.props;
      if(props.match.params.userId !== prevProps.match.params.userId ) {
         this.refreshProfile();
      }
   }

   render() {
      const props = this.props;
      if(props.nonExistentUser) {
         return <div className={styles.nonExistentUser}>
            <div>User does not exist</div>
         </div>
      }
      if(!props.userProfile) {
         return <Preloader />
      }
      return (
         <div className={styles.profile}>
            <Profile {...props} userProfile={props.userProfile} isOwner={!props.match.params.userId} />
         </div>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      userProfile: getUserProfile(state),
      postsData: getPostData(state),
      status: getStatus(state),
      userId: getUserId(state),
      editMode: getEditMode(state),
      nonExistentUser: getNonExistentUserMode(state)
   }
}

const ProfileContainer = connect(mapStateToProps, {setUserProfileThunkCreator, setUserStatusThunkCreator,
   updateUserStatusThunkCreator, addPost, setPhotoThunk, saveProfileInfoThunk, setEditMode })(ProfileClassContainer)


export default ProfileContainer;