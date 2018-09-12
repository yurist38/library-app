import { call, put, takeLatest } from 'redux-saga/effects';
import { booksUrl } from '../../common/constants';
import actions, { IRequestBooks } from '../actions/books';
import api from '../api';

function* requestBooks(action: IRequestBooks) {
  const { data, error } = yield call(api.get, booksUrl);

  if (error) {
    return yield put(actions.requestBooksFail(error));
  }

  return yield put(actions.requestBooksSuccess(data));
}

function* booksSaga() {
  yield takeLatest(actions.types.REQUEST_BOOKS, requestBooks);
}

export {
  requestBooks,
};

export default booksSaga;
