import React from 'react'
import styles from './header.module.css';
import Header from './header'
import {connect} from 'react-redux';
import { logOutThunk } from '../../Redux/auth_reducer'

class HeaderClassContainer extends React.Component {
   render() {
      return (
         <div className={styles.header_container}>
            <Header {...this.props} />
         </div>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      email: state.auth.email,
      isAuth: state.auth.isAuth
   }
}

const HeaderContainer = connect(mapStateToProps, {
   logOutThunk
})(HeaderClassContainer);

export default HeaderContainer;