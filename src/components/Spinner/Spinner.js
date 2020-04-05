import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import withTheme from '../hoc/withTheme';
// import PropTypes from 'prop-types';

const Spinner = () => (
  <Loader type="ThreeDots" color="#2196f3" height={50} width={50} />
);

export default Spinner;
