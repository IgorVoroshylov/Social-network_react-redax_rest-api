import {sendMessageAction} from '../../Redux/dialogs_reducer'
import Dialogs from './dialogs'
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../hoc/redirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogs
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: (newMessageText) => {
         dispatch(sendMessageAction(newMessageText));
      }
   }
}

const DialogContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect)(Dialogs)

export default DialogContainer;