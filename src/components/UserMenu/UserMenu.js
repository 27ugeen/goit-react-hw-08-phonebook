import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Spinner from '../Spinner';
import styles from './UserMenu.module.css';

const { container, userAvatar, userName } = styles;

const UserMenu = ({ avatar, name, isLoading, onLogout }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className={container}>
        <img src={avatar} alt="" width="32" className={userAvatar} />
        <span className={userName}>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    )}
  </>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
  isLoading: authSelectors.getLoading(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
