import { all, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

export function* log(action: PayloadAction) {
  yield console.log('log', action);
}

export default function* counterSaga() {
  console.log('Counter Saga');
  yield takeEvery('*', log);
}
