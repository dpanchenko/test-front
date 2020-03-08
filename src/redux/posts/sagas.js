import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { message as toast } from 'antd';
import {
  IMPORT,
  LIST,
  ITEM,
} from './constants';
import {
  doImportStart,
  doImportSuccess,
  doImportFail,
  getList,
  getListStart,
  getListSuccess,
  getListFail,
  getItemStart,
  getItemSuccess,
  getItemFail,
  reset,
} from './actions';

import {
  getItem as getUserItem,
} from '../users/actions';

import api from '../../api';

import { ITEMS_PER_PAGE } from '../../constants';

export function* getListSaga(action) {
  try {
    yield put(getListStart());
    const page = action.payload || 1;
    const response = yield call(api.posts.getList, { page, limit: ITEMS_PER_PAGE });

    yield put(getListSuccess(response));
  } catch (error) {
    const { response, message } = error;

    yield put(getListFail((response && response.error) || message));
    yield fork(toast.error, (response && response.error) || message);
  }
}

export function* getItemSaga(action) {
  try {
    yield put(getItemStart());

    const id = action.payload;
    const response = yield call(api.posts.getItem, id);

    // this is just for saga demonstration
    // load user here
    yield put(getUserItem(response.userId));

    yield put(getItemSuccess(response));
  } catch (error) {
    const { response, message } = error;

    yield put(getItemFail((response && response.error) || message));
    yield fork(toast.error, (response && response.error) || message);
  }
}

export function* doImportSaga() {
  try {
    yield put(reset());
    yield put(doImportStart());

    yield call(api.posts.importItems);

    yield put(doImportSuccess());
    yield fork(toast.success, 'Import finished successfull');
    yield put(getList());
  } catch (error) {
    const { response, message } = error;

    yield put(doImportFail((response && response.error) || message));
    yield fork(toast.error, (response && response.error) || message);
  }
}

export default function* saga() {
  yield takeEvery(LIST, getListSaga);
  yield takeEvery(ITEM, getItemSaga);
  yield takeEvery(IMPORT, doImportSaga);
}
