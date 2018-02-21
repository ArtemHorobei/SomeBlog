export const REQUEST_OAUTH_SIGN_IN = 'REQUEST_OAUTH_SIGN_IN';
export const RECEIVE_OAUTH_SIGN_IN = 'RECEIVE_OAUTH_SIGN_IN';

export const requestOAuthSignIn = (data) => ({ type: REQUEST_OAUTH_SIGN_IN, data });
export const receiveOAuthSignIn = (data) => ({ type: RECEIVE_OAUTH_SIGN_IN, data });
