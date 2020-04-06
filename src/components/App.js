import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import Spinner from './Spinner';
import ThemeSelector from './ThemeSelector';
import ThemeContext from '../context/ThemeContext';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import routes from '../routes';
import { authOperations } from '../redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <ThemeContext>
            <ThemeSelector toggleTheme={this.props.toggleTheme} />
            <Layout>
              <Suspense fallback={<Spinner />}>
                <Switch>
                  {routes.map(route =>
                    route.private ? (
                      <PrivateRoute key={route.label} {...route} />
                    ) : (
                      <PublicRoute key={route.label} {...route} />
                    ),
                  )}
                </Switch>
              </Suspense>
            </Layout>
          </ThemeContext>
        </BrowserRouter>
      </>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
