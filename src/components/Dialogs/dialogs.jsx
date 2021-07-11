import styles from './dialogs.module.css'
import DialogPerson from './Person/person'
import Message from './Messages/messages'
import { Field, reduxForm } from 'redux-form'

const AddMassegeFofm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.textarea_button}>
         <Field component='textarea' name='textarea' />
         <button>Send</button>
      </form>
   )
}
const AddMassegeFormRedux = reduxForm({form: 'massege'})(AddMassegeFofm);

const Dialogs = (props) => {
   const dialogElements = props.dialogs.dialogsData.map(dialog => <DialogPerson key={dialog.id} dialog={dialog}/>);
   const messageElements = props.dialogs.messagesData.map(mess => <Message key={mess.id} text={mess.message} />);

   const submit = (FormData) => {
      props.sendMessage(FormData.textarea);
      FormData.textarea = '';
   }

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogs_item}>
            {dialogElements}
         </div>
         <div className={styles.messagesBlock}>
            <div className={styles.messages_list}> 
               {messageElements}
            </div>
            <AddMassegeFormRedux onSubmit={submit} />
         </div>
      </div>
   )
}

export default Dialogs