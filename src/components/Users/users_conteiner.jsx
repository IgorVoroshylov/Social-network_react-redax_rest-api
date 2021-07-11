import React from 'react'
import { setUsersThunkCreator, followThunkCreator, unFollowThunkCreator } from '../../Redux/users_reducer'
import {connect} from 'react-redux'
import Users from './users'
import { compose } from 'redux';

class UsersClassConteiner extends React.Component {
   componentDidMount() {
      const props = this.props;
      props.setUsersThunkCreator(props.pageSize);
   }

   onPageChenged = (pageNumber) => {
      const props = this.props;
      props.setUsersThunkCreator(props.pageSize, pageNumber, pageNumber);
   }

   render() {
      const props = this.props;
      return <Users totalUserCount={props.totalUserCount}
                     pageSize={props.pageSize}
                     onPageChenged={this.onPageChenged}
                     currentPage={props.currentPage}
                     usersList={props.usersList}
                     isPreloader={props.isPreloader}
                     followingInProgress={props.followingInProgress}
                     followThunkCreator={props.followThunkCreator}
                     unFollowThunkCreator={props.unFollowThunkCreator}
                     />
   }
}

let mapStateToProps = (state) => {
   return {
      usersList: state.users.usersList,
      pageSize: state.users.pageSize,
      totalUserCount: state.users.totalUserCount,
      currentPage: state.users.currentPage,
      isPreloader: state.users.isPreloader,
      followingInProgress: state.users.followingInProgress
   }
}

const UserContainer = compose(
   connect(mapStateToProps, {setUsersThunkCreator, followThunkCreator, unFollowThunkCreator})
)(UsersClassConteiner)

export default UserContainer