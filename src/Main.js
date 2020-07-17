import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import { connect } from 'react-redux';
import { getAccessTokenFromLocalStorage } from '../src/api';
import { SET_STATE_FROM_LOCAL_STORAGE } from './actions/action_index';
import Header from '../src/container/Header';
import Bike from './components/after_login/Bike';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import DashBoard from './components/after_login/Dashboard';
import NoMatch from './components/Nodatafound';
import Container from '@material-ui/core/Container';


function Main(props) {

  const [/* state, setState */] = useState({
    isAfterLogin: false
  })

  const {
    access_token,
    dispatchtosetstatedata,
  } = props;

  var isAfterLogin = false;

  /* Token is not present in redux */
  if (access_token === undefined) {
    /* Check Token is present in Local Storage */
    if (getAccessTokenFromLocalStorage()) {
      dispatchtosetstatedata();
    }
  }
  else {
    isAfterLogin = true;
  }

  console.log(props);

  return (
    <>
      <Router>
        {isAfterLogin !== undefined && isAfterLogin
          &&
          <Header />
        }
        <Container>

          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/registration' component={Registration} />
            <PrivateRoute>
              {/* <Header> */}
              <Route exact path='/dashboard' component={DashBoard} />
              <Route exact path='/bike' component={Bike} />
              {/* </Header> */}
            </PrivateRoute>
            {/* <PrivateRoute exact path="/dashboard" component={DashBoard} /> */}
            {/* <PrivateRoute exact path="/bike" component={Bike} /> */}
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    </>
  )
}

const mapStateToProps = (state) => ({
  access_token: state.user.loggedInUserData.token,
  loggedInUserData: state.user
})

const mapDispatchToProps = (dispatch) => ({
  dispatchtosetstatedata: (userMobile, password) => dispatch({
    type: SET_STATE_FROM_LOCAL_STORAGE
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)