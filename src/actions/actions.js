export const REQUEST_OAUTH_SIGN_IN = 'REQUEST_OAUTH_SIGN_IN';
export const RECEIVE_OAUTH_SIGN_IN = 'RECEIVE_OAUTH_SIGN_IN';
export const REQUEST_VALIDATE_TOKEN = 'REQUEST_VALIDATE_TOKEN';
export const RECEIVE_UPDATE_HEADERS = 'RECEIVE_UPDATE_HEADERS';
export const REQUEST_GET_POSTS = 'REQUEST_GET_POSTS';
export const RECEIVE_GET_POSTS = 'RECEIVE_GET_POSTS';
export const REQUEST_CREATE_POST = 'REQUEST_CREATE_POST';
export const RECEIVE_CREATE_POST = 'RECEIVE_CREATE_POST';

export const requestOAuthSignIn = data => ({ type: REQUEST_OAUTH_SIGN_IN, data });
export const receiveOAuthSignIn = data => ({ type: RECEIVE_OAUTH_SIGN_IN, data });

export const requestValidateToken = () => ({ type: REQUEST_VALIDATE_TOKEN });
export const receiveUpdateHeaders = data => ({ type: RECEIVE_UPDATE_HEADERS, data });

export const requestGetPosts = () => ({ type: REQUEST_GET_POSTS });
export const receiveGetPosts = data => ({ type: RECEIVE_GET_POSTS, data });

export const requestCreatePost = data => ({ type: REQUEST_CREATE_POST, data });
export const receiveCreatePost = data => ({ type: RECEIVE_CREATE_POST, data });
