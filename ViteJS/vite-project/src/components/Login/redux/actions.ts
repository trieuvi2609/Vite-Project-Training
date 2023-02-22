export function signOut() {
  return {
    type: AuthTypes.SIGNOUT,
  };
}

export function requestSignOut() {
  return {
    type: AuthTypes.REQUEST_SIGNOUT,
  };
}

export function requestSignUpEmailPassword(props: AuthSignUpInput): AuthAction<AuthSignUpInput> {
  return {
    type: AuthTypes.REQUEST_SIGNUP_EMAIL_PASSWORD,
    payload: { ...props },
  };
}

export function signUpSuccess() {
  return {
    type: AuthTypes.SIGNUP_SUCCESS,
  };
}

export function authError(error: any) {
  return {
    type: AuthTypes.AUTH_ERROR,
    payload: { error },
  };
}
