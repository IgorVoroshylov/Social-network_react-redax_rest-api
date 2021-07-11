import React from 'react'
import styles from './users.module.css'
import Pagination from './pagination'
import UserPreview from './user_preview'

const Users = (props) => {
   return <div className={styles.users}>
      { props.usersList.map(user => <UserPreview key={user.name}
                                                  user={user}
                                                  followingInProgress={props.followingInProgress}
                                                  followThunkCreator={props.followThunkCreator}
                                                  unFollowThunkCreator={props.unFollowThunkCreator} />)
      }

      <Pagination totalUserCount={props.totalUserCount}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onPageChenged={props.onPageChenged}
                  isPreloader={props.isPreloader} />
   </div>
}

export default Users;
