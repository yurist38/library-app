import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import IBook from '../interfaces/book';
import booksReducer from './books';
import searchReducer, { ISearchReducer } from './search';

export interface IGlobalState {
  books: IBook[];
  router: RouterState;
  search: ISearchReducer;
}

const rootReducer = combineReducers<IGlobalState>({
  books: booksReducer,
  router: routerReducer,
  search: searchReducer,
});
​
export default rootReducer;
