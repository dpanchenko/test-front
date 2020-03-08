import { call, put, takeEvery } from 'redux-saga/effects';
import config from '../../config';
import { setConfig } from '../../helpers/appConfig';

import { LOAD } from './constants';
import {
  loadStart,
  loadSuccess,
  loadFail,
} from './actions';

function* loadSaga() {
  try {
    yield put(loadStart());

    const appConfig = yield call(config);

    setConfig(appConfig);

    yield put(loadSuccess(appConfig));
  } catch (error) {
    yield put(loadFail(error));
  }
}

export default function* saga() {
  yield takeEvery(LOAD, loadSaga);
}
