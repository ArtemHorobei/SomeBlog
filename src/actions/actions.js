export const REQUEST_OAUTH_SIGN_IN = 'REQUEST_OAUTH_SIGN_IN';
export const RECEIVE_OAUTH_SIGN_IN = 'RECEIVE_OAUTH_SIGN_IN';
export const REQUEST_VALIDATE_TOKEN = 'REQUEST_VALIDATE_TOKEN';
export const RECEIVE_VALIDATE_TOKEN = 'RECEIVE_VALIDATE_TOKEN';

export const requestOAuthSignIn = (data) => ({ type: REQUEST_OAUTH_SIGN_IN, data });
export const receiveOAuthSignIn = (data) => ({ type: RECEIVE_OAUTH_SIGN_IN, data });

export const requestValidateToken = () => ({ type: REQUEST_VALIDATE_TOKEN });
export const receiveValidateToken = (data) => ({ type: RECEIVE_VALIDATE_TOKEN, data });
