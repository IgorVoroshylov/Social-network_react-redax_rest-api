import styles from '../../profile.module.css'
import {requiredField, maxLenghtCreator, minLenghtCreator} from '../../../../For_form/validation'
import { Field, reduxForm } from 'redux-form'
import {InputForm} from '../../../../For_form/form'

const maxLenght50 = maxLenghtCreator(50);
const minLenght2 = minLenghtCreator(2);

const InfoEditBlock = (props) => {
   return(
      <form onSubmit={props.handleSubmit} className={styles.information}>

         <div className={styles.infoItem}><span>Full name:</span>
            <Field component={InputForm} name='fullName' placeholder='full name' validate={[requiredField, maxLenght50, minLenght2]} />
         </div>

         <div className={styles.infoItem}> <span>Open to suggestions:</span>
            <Field component='input' name='lookingForAJob' type="checkbox" />
         </div>

         <div className={styles.infoItem}> <span>My skills:</span>
            {<Field component='textarea' name='lookingForAJobDescription' placeholder='my skills' />}
         </div>

         <div className={styles.infoItem}> <span>About me:</span>
            {<Field component='textarea' name='aboutMe' placeholder='about me' />}
         </div>

         <div className={styles.infoItem}>
            <span>Contacts:</span> {Object.entries(props.userProfile.contacts).map(contact => <div key={contact[0]} className={styles.contact}>
               <span>{contact[0]}:</span>
               {<Field component={InputForm} name={'contacts.' + contact[0]} placeholder={contact[0]} />}
            </div>)}
         </div>

         {props.error && <div className={styles.form_error}>{props.error[0]}</div>}

         <button>save</button>
      </form>
   )
}

const InfoEditBlockReduForm = reduxForm({form: 'editprofile'})(InfoEditBlock);

export default InfoEditBlockReduForm;