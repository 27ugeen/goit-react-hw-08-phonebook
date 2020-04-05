import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const { home, register, login, contacts } = routes;

const { navList, navLink, navLinkActive } = styles;

const Navigation = () => (
  <ul className={navList}>
    <NavLink
      exact
      to={home}
      className={navLink}
      activeClassName={navLinkActive}
    >
      Home
    </NavLink>
    <NavLink
      exact
      to={register}
      className={navLink}
      activeClassName={navLinkActive}
    >
      Register
    </NavLink>
    <NavLink
      exact
      to={login}
      className={navLink}
      activeClassName={navLinkActive}
    >
      Login
    </NavLink>
    <NavLink
      exact
      to={contacts}
      className={navLink}
      activeClassName={navLinkActive}
    >
      Contacts
    </NavLink>
  </ul>
);

export default Navigation;
