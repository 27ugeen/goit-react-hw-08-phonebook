import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isLoggedIn && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
});

export default connect(mapStateToProps)(PublicRoute);
