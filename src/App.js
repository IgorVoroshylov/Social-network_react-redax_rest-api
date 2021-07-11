import React, { Suspense } from 'react'
import './App.css'
import HeaderContainer from './components/Header/header_container'
import SidebarContainer from './components/Sidebar/sidebar_container'
import ProfileContainer from './components/Profile/profile_container'
//import DialogContainer from './components/Dialogs/dialog_container'
import { Redirect, Route, Switch } from 'react-router-dom'
import Music from './components/Music/music'
import News from './components/News/news'
import Settings from './components/Settings/settings'
import Friends from './components/Friends/friends'
import LoginForm from './components/Login/login'
import UserContainer from "./components/Users/users_conteiner"
import {initializeApp} from '../src/Redux/app_reduser'
import { connect } from 'react-redux'
import Preloader from './components/Users/preloader'

const DialogContainer = React.lazy( () => import('./components/Dialogs/dialog_container') );
const withSuspense = (Component) => {
  return (props) => {
    return <Suspense fallback={ <Preloader/> } >
              <Component {...props} />
           </Suspense>
  }
}

class App extends React.Component {
  catchAllUnhandleErrors = (promiseRejectionEvent) => {
    console.error(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  }

  render() {
    if(this.props.initialized) {
      return (
          <div className="app_wrapper">
            <HeaderContainer />
            <SidebarContainer />
            <div className="app_wrapper_content">
              <Switch>
                <Route path="/dialogs" component={ withSuspense(DialogContainer) } />
                <Route path="/profile/:userId?" component={ProfileContainer} />
                <Route path="/users" component={UserContainer} />
                <Route path="/music" component={Music} />
                <Route path="/news" component={News} />
                <Route path="/settings" component={Settings} />
                <Route path="/friends" component={Friends} />
                <Route path="/login" component={LoginForm} />
                <Redirect to={"/login"}/>
              </Switch>
            </div>
          </div>
      )
    } else {
      return <Preloader />
    }
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App)