import actions, { IRequestBooks, IRequestBooksFail, IRequestBooksSuccess } from '../actions/books';
import IBook from '../interfaces/book';

const initialState: IBook[] = [];

type BooksAction = IRequestBooks | IRequestBooksSuccess | IRequestBooksFail;

function booksReducer(state: IBook[] = initialState, action: BooksAction): IBook[] {
  switch (action.type) {
    case actions.types.REQUEST_BOOKS_SUCCESS:
      return action.payload.books;
    default:
      return state;
  }
}

export default booksReducer;
