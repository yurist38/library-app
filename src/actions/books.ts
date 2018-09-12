import IBook from '../interfaces/book';

enum BOOKS_ACTION_TYPES {
  REQUEST_BOOKS = 'REQUEST_BOOKS',
  REQUEST_BOOKS_SUCCESS = 'REQUEST_BOOKS_SUCCESS',
  REQUEST_BOOKS_FAIL = 'REQUEST_BOOKS_FAIL',
}

interface IRequestBooks {
  type: BOOKS_ACTION_TYPES.REQUEST_BOOKS;
}

interface IRequestBooksSuccess {
  type: BOOKS_ACTION_TYPES.REQUEST_BOOKS_SUCCESS;
  payload: {
    books: IBook[];
  };
}

interface IRequestBooksFail {
  type: BOOKS_ACTION_TYPES.REQUEST_BOOKS_FAIL;
  payload: {
    error: object;
  };
}

function requestBooks(): IRequestBooks {
  return {
    type: BOOKS_ACTION_TYPES.REQUEST_BOOKS,
  };
}

function requestBooksSuccess(books: IBook[]): IRequestBooksSuccess {
  return {
    payload: {
      books,
    },
    type: BOOKS_ACTION_TYPES.REQUEST_BOOKS_SUCCESS,
  };
}

function requestBooksFail(error: object): IRequestBooksFail {
  return {
    payload: {
      error,
    },
    type: BOOKS_ACTION_TYPES.REQUEST_BOOKS_FAIL,
  };
}

export { IRequestBooks, IRequestBooksSuccess, IRequestBooksFail };
export default {
  requestBooks,
  requestBooksFail,
  requestBooksSuccess,
  types: {
    ...BOOKS_ACTION_TYPES,
  },
};
