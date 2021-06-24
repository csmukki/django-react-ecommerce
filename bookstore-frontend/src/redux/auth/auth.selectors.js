import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

const selectSignIn = createSelector([selectAuth], (auth) => auth.signIn);

const selectSignUp = createSelector([selectAuth], (auth) => auth.signUp);

const selectSignInEmailField = createSelector(
  [selectSignIn],
  (signIn) => signIn.email
);

const selectSignInPasswordField = createSelector(
  [selectSignIn],
  (signIn) => signIn.password
);

const selectSignUpUsernameField = createSelector(
  selectSignUp,
  (signUp) => signUp.username
);

const selectSignUpEmailField = createSelector(
  selectSignUp,
  (signUp) => signUp.email
);

const selectSignUpPasswordField = createSelector(
  selectSignUp,
  (signUp) => signUp.password
);

const selectSignUpConfirmPasswordField = createSelector(
  selectSignUp,
  (signUp) => signUp.confirmPassword
);

const selectSignUpErrorsField = createSelector(
  selectSignUp,
  (signUp) => signUp.errors
);

export {
  selectSignIn,
  selectSignInEmailField,
  selectSignInPasswordField,
  selectSignUp,
  selectSignUpConfirmPasswordField,
  selectSignUpPasswordField,
  selectSignUpEmailField,
  selectSignUpUsernameField,
  selectSignUpErrorsField,
};
