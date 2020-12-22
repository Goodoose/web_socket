import { all, put, take } from 'redux-saga/effects';
import * as filesActionTypes from './dataConstants';
import {
  setDataSuccess,
  setDataFail,
} from './dataActions';

export function* getDataSaga() {
  while (true) {
    const { payload } = yield take(filesActionTypes.DATA);
    const { data } = payload;

    try {
      yield put(setDataSuccess(data));
      console.log('******* setDataSagaSuccess');
    } catch (error) {
      yield put(setDataFail(error));
      console.log('******* setDataSagaError: ', error);
    }
  }
}

export function* saga() {
  yield all([
    getDataSaga(),
  ]);
}
