import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const addUser = (_, { payload }) => payload.user;
const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: addUser,
  [authActions.loginSuccess]: addUser,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialUserState,
});

const addToken = (_, { payload }) => payload.token;

const token = createReducer(null, {
  [authActions.registerSuccess]: addToken,
  [authActions.loginSuccess]: addToken,
  [authActions.logoutSuccess]: () => null,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const addError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: addError,
  [authActions.loginError]: addError,
  [authActions.logoutError]: addError,
  [authActions.getCurrentUserError]: addError,
});

export default combineReducers({
  user,
  token,
  loading,
  error,
});
