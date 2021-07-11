import React from 'react'
import styles from '../dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogPerson = (props) => {
   return (
      <div className={styles.dialog}>
         <img src={props.dialog.img} alt="oh no..."/>
         <NavLink activeClassName={styles.active} to={"/dialogs/" + props.dialog.id}>{props.dialog.name}</NavLink>
      </div>
   )
}

export default DialogPerson