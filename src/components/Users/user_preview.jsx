import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../img/user.jpg'
import {NavLink} from 'react-router-dom'

const UserPreview = (props) => {
   const user = props.user;
   return <div className={styles.user}>
            <div className={styles.leftSide}>
               <div>
                  <NavLink to={'/profile/' + user.id}>
                     <img className={styles.userAva} src={user.photos.small != null ? user.photos.small : userPhoto} alt="oh no..."/>
                  </NavLink>
               </div>
               <div>
                  {user.followed
                     ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                           props.unFollowThunkCreator(user.id);
                        }} style={{backgroundColor: 'orange'}} >unfollow</button>
                     : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                           props.followThunkCreator(user.id);
                        }}>follow</button>
                  }
               </div>
            </div>

            <div className={styles.rightSide}>
               <div>
                  <div className={styles.fullName}>{user.name}</div>
                  <div>{user.status ? user.status : "no_status"}</div>
               </div>
               <div className={styles.living}>
                 <div>{'city'},</div>
                  <div>{'country' }</div>
               </div>
            </div>
         </div>
}

export default UserPreview;