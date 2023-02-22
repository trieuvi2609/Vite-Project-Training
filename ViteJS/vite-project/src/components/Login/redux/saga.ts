import { all, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import fetchCaller from '~/api/fetchCaller';
import { METHOD } from './../../../api/const';

export function* handleLogin(action: PayloadAction) {
  yield console.log('loginUser');
}
export function* handleLogout() {
  yield console.log('logOut');
}

export function* watchLoginFlow() {}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
