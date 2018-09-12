import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import IBook from '../interfaces/book';
import booksReducer from './books';

export interface IGlobalState {
  books: IBook[];
  router: RouterState;
}

const rootReducer = combineReducers<IGlobalState>({
  books: booksReducer,
  router: routerReducer,
});
​
export default rootReducer;
