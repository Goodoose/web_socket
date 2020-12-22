import { all } from 'redux-saga/effects';
import { saga as dataSaga } from './data/dataSaga';

export default function* rootSaga() {
  yield all([
    dataSaga(),
  ]);
}
