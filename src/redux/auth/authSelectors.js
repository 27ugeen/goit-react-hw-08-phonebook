const isLoggedIn = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getLoading = state => state.auth.loading;

export default { isLoggedIn, getUserName, getUserEmail, getLoading };
