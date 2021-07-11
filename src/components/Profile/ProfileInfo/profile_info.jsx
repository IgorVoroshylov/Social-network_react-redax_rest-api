import styles from '../profile.module.css'
import userPhoto from '../../../img/user.jpg'
import StatusWithHook from './hookProfileStatus'
import InfoEditBlockReduForm from './Info/edit'
import InfoBlock from './Info/info'
import { useEffect } from 'react'

const ProfileInfo = (props) => {
   const {userProfile, userId, setEditMode} = props;

   useEffect(() => {
      if(userProfile.userId !== userId) {
         setEditMode(false);
      }
   }, [userProfile, userId, setEditMode])

   const userPhotoSelected = (e) => {
      if(e.target.files.length > 0) {
         props.setPhotoThunk(e.target.files[0]);
      }
   }

   const submit = (formData) => {
      props.saveProfileInfoThunk(formData)
   }

   return(
      <div>
         <div className={styles.my_info}>
            <div>
               <img className={styles.avatar} src={ props.userProfile.photos.large || userPhoto } alt="oh no..." />
               {
                  props.isOwner ?
                  <div>
                     <input type="file" name='file' onChange={ userPhotoSelected } />
                  </div>
                  :
                  null
               }
            </div>
            {
               props.editMode ?
               <InfoEditBlockReduForm initialValues={props.userProfile} userProfile={props.userProfile} onSubmit={submit} isOwner={props.isOwner}/>
               :
               <InfoBlock userProfile={props.userProfile} isOwner={props.isOwner} setEditMode={props.setEditMode} />
            }
         </div>
         <StatusWithHook status={props.status}
                         updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
      </div>
   )
}

export default ProfileInfo