import React from 'react'
import styles from './header.module.css'
import Logo from '../../img/Logo.png'
import { NavLink } from 'react-router-dom';


function Header(props) {
   return (
      <header className={styles.header}>
         <div>
            <img src={Logo} alt="oh no..."/>
         </div>
         <div className={styles.login}>
            {props.isAuth
            ? <div className={styles.log}>{props.email}<button onClick={props.logOutThunk}>Logout</button></div>
            : <NavLink to={'/login'}>LogIn</NavLink>
            }
         </div>
      </header>
   )
}

export default Header;