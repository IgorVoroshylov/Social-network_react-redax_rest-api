import Sidebar from './sidebar'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
   return {
      friends: state.friends
   }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;