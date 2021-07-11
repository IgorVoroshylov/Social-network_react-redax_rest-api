import React from 'react'
import styles from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Friend from './Sidebar_friend_item/friend_item'

function Sidebar(props) {
   const frendList = props.friends.map(item => <Friend key={item.id} friend={item}/>)

   return(
      <nav className={styles.nav}>
         <div className={styles.item}><NavLink activeClassName={styles.active} to="/profile">Profile</NavLink></div>
         <div className={styles.item}><NavLink activeClassName={styles.active} to="/dialogs">Messages</NavLink></div>
         <div className={styles.item}><NavLink activeClassName={styles.active} to="/news">News</NavLink></div>
         <div className={styles.item}><NavLink activeClassName={styles.active} to="/music">Music</NavLink></div>
         <div className={styles.item}><NavLink activeClassName={styles.active} to="/settings">Settings</NavLink></div>
         <div className={styles.item}><NavLink activeClassName={styles.active} to="/users">Users</NavLink></div>
         <div className={styles.item}>
            <NavLink activeClassName={styles.active} to="/friends">
               <div>Friends</div>
               <div className={styles.friends}>{frendList}</div> {/* макет, в процессе разработки */}
            </NavLink>
         </div>
      </nav>
   )
}

export default Sidebar;