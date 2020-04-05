import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.css';

const { header } = styles;

const AppBar = ({ isLoggedIn }) => (
  <header className={header}>
    <Navigation />
    {/* <UserMenu /> */}
    {isLoggedIn && <UserMenu />}
  </header>
);

const mapStateToProps = state => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
});

export default connect(mapStateToProps)(AppBar);
