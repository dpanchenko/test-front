import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { message as toast } from 'antd';
import {
  ITEM,
} from './constants';
import {
  getItemStart,
  getItemSuccess,
  getItemFail,
} from './actions';

import api from '../../api';

export function* getItemSaga(action) {
  try {
    yield put(getItemStart());

    const id = action.payload;
    const response = yield call(api.users.getItem, id);

    yield put(getItemSuccess(response));
  } catch (error) {
    const { response, message } = error;

    yield put(getItemFail((response && response.error) || message));
    yield fork(toast.error, (response && response.error) || message);
  }
}

export default function* saga() {
  yield takeEvery(ITEM, getItemSaga);
}
