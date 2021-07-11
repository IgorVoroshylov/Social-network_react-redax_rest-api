import { Field, reduxForm } from 'redux-form'
import {InputForm} from '../../For_form/form'
import {requiredField, maxLenghtCreator, minLenghtCreator} from '../../For_form/validation'
import style from './login.module.css'

const maxLenght50 = maxLenghtCreator(20);
const minLenght2 = minLenghtCreator(2);

const Form = (props) => {
   return (
         <form onSubmit={props.handleSubmit} className={style.form} >
            <div className={style.log}>
               <Field type="text" placeholder='login' name='login' component={InputForm}
                  validate={[requiredField, maxLenght50, minLenght2]} />
            </div>
            <div className={style.pass}>
               <Field type="password" placeholder='password' name='pass' component={InputForm}
                  validate={[requiredField, maxLenght50, minLenght2]} />
            </div>
            <div className={style.check} >
               <Field type="checkbox" id='checkbox' name='checkbox' component={'input'} />
               <label htmlFor="checkbox">Remember me</label>
            </div>
            {props.error && <div className={style.form_error}>{props.error}</div>}
            { props.captcha &&
               <div className={style.captcha}>
                  <img src={props.captcha} alt="" />
                  <Field type="text" placeholder='captcha' name='captcha' component='input' />
               </div>
            }
            <div className={style.btn}>
               <button>LogIn</button>
            </div>
         </form>
)}

const LoginReduxForm = reduxForm({form: 'login'})(Form);

export default LoginReduxForm;