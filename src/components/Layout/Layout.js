import React from 'react';
import AppBar from '../AppBar';
import styles from './Layout.module.css';

const { container } = styles;

const Layout = ({ children }) => (
  <div className={container}>
    <AppBar />
    {children}
  </div>
);

export default Layout;
