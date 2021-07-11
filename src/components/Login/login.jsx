import React from 'react'
import style from './login.module.css'
import {loginThunk} from '../../Redux/auth_reducer';
import { connect } from 'react-redux'
import { Redirect } from "react-router"
import LoginReduxForm from './login_form';

const LoginForm = (props) => {
   const submit = (formData) => {
      props.loginThunk(formData.login, formData.pass, formData.checkbox, formData.captcha);
   }

   if(props.isAuth) {
      return <Redirect to={'/profile'} />
   }

   return (
      <div className={style.login_title}>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={submit} captcha={props.captcha} />
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      captcha: state.auth.captchaUrl
   }
}

const FormContainer = connect(mapStateToProps, {loginThunk})(LoginForm);

export default FormContainer;