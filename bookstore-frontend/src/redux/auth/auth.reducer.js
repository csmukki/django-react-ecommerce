import { authActionTypes } from "./auth.types";

const INITIAL_STATE = {
  signIn: {
    email: "",
    password: "",
  },
  signUp: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  },
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.USER_SIGN_IN:
      return {
        ...state,
        signIn: action.payload,
      };
    case authActionTypes.USER_SIGN_UP:
      return {
        ...state,
        signUp: action.payload,
      };
    default:
      return state;
  }
};
