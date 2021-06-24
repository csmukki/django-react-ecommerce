import { authActionTypes } from "./auth.types";

export const setUserSignIn = (data) => ({
  type: authActionTypes.USER_SIGN_IN,
  payload: data,
});

export const setUserSignUp = (data) => ({
  type: authActionTypes.USER_SIGN_UP,
  payload: data,
});
