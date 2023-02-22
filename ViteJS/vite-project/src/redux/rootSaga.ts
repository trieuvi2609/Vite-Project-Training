import counterSaga from '~/components/Dashboard/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  yield console.log('Hello');
}

export default function* rootSaga() {
  console.log('RootSaga');

  yield all([helloSaga(), counterSaga(), authSaga()]);
}
