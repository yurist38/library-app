import actions, { IRequestBooks, IRequestBooksFail, IRequestBooksSuccess } from '../actions/books';
import IBook, { IBookWithId } from '../interfaces/book';

const initialState: IBookWithId[] = [];

type BooksAction = IRequestBooks | IRequestBooksSuccess | IRequestBooksFail;

function booksReducer(state: IBookWithId[] = initialState, action: BooksAction): IBookWithId[] {
  switch (action.type) {
    case actions.types.REQUEST_BOOKS_SUCCESS:
      const booksWithId = action.payload.books.map((book: IBook, id: number) => ({ ...book, id }));
      return booksWithId;
    default:
      return state;
  }
}

export default booksReducer;
