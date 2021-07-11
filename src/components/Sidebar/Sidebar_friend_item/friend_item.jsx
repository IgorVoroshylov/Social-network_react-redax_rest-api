import React from 'react'
import styles from '../sidebar.module.css'

const Friend = (props) => {
   return(
   <div className={styles.friend}>
      <img src={props.friend.img} alt=""/>
      <div>{props.friend.name}</div>
   </div>
   )
}

export default Friend