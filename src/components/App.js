import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import Spinner from './Spinner';
import ThemeSelector from './ThemeSelector';
import ThemeContext from '../context/ThemeContext';
import routes from '../routes';
import { authOperations } from '../redux/auth';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const NotFound = lazy(() => import('../views/NotFound'));

const { home, register, login, contacts } = routes;

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
                  <Route path={home} exact component={HomeView} />
                  <Route path={register} exact component={RegisterView} />
                  <Route path={login} exact component={LoginView} />
                  <Route path={contacts} exact component={ContactsView} />
                  <Route component={NotFound} />
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
