import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import DashBoard from './components/after_login/Dashboard';
import NoMatch from './components/Nodatafound';
import { connect } from 'react-redux';
import { getAccessTokenFromLocalStorage } from '../src/api';
import { SET_STATE_FROM_LOCAL_STORAGE } from './actions/action_index';
import Header from '../src/components/after_login/Header';

function Main(props) {

  const [state, setState] = useState({
    isAfterLogin: false
  })

  const {
    access_token,
    dispatchtosetstatedata,
    loggedInUserData
  } = props;

  console.log(access_token, "in main");

  var isAfterLogin = false;

  /* Token is not present in redux */
  if (access_token == undefined) {
    /* Check Token is present in Local Storage */
    if (getAccessTokenFromLocalStorage()) {
      dispatchtosetstatedata();
    }
  }
  else {
    isAfterLogin = true;
  }

  return (
    <>
      <Router>
        {isAfterLogin !== undefined && isAfterLogin
          &&
          <Header />
        }
        < Switch >
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/registration' component={Registration} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  )
}

const mapStateToProps = (state) => ({
  access_token: state.user.loggedInUserData.token,
  loggedInUserData: state.user

})

const mapDispatchToProps = (dispatch) => ({
  dispatchtosetstatedata: (email, password) => dispatch({
    type: SET_STATE_FROM_LOCAL_STORAGE
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)