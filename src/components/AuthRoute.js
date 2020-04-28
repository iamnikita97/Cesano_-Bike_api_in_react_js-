import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { getAccessTokenFromLocalStorage } from '../api';


const AuthRoute = ({ component: Component, access_token, ...rest }) => (
  <Route
    {...rest}
    render={props => (access_token ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />)}
  />
);

function mapStateToProps(state) {
  return {
    access_token: getAccessTokenFromLocalStorage()
  };
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute));