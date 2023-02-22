import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './type';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
};

const loginReducer: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<User>) {
      state.isLoading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const { login, loginSuccess, loginFailed, logout } = loginReducer.actions;

// Selector
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLoading = (state: any) => state.auth.isLoading;
// Reducer
const authReducer = loginReducer.reducer;
export default authReducer;
