import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router"

export const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if(!this.props.auth) return <Redirect to={'/login'} />
         return <Component {...this.props} />
      }
   }

   const mapStateToProps = (state) => {
      return {
         auth: state.auth.isAuth
      }
   }

   const ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

   return ConnectRedirectComponent;
}



