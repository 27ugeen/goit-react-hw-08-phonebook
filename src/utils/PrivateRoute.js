import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PrivateRoute = ({ component: Component, isLoggedIn, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
