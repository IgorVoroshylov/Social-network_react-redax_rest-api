import React from 'react'
import styles from './users.module.css'
import preloader from '../../img/preloader.gif'

const Preloader = () => {
   return <div>
      <div className={styles.preloader}><img src={preloader} alt="sorry..."/></div>
   </div> 
}

export default Preloader