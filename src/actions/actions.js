export const REQUEST_OAUTH_SIGN_UP = 'REQUEST_OAUTH_SIGN_UP';
export const RECEIVE_OAUTH_SIGN_UP = 'RECEIVE_OAUTH_SIGN_UP';

export const requestOAuthSignUp = (data) => ({ type: REQUEST_OAUTH_SIGN_UP, data });
export const receiveOAuthSignUp = (data) => ({ type: RECEIVE_OAUTH_SIGN_UP, data });
