import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

import { generateReservedIDs } from '../../common/utils';
import { IBookWithId } from '../interfaces/book';
import booksReducer from './books';
import cartReducer from './cart';
import searchReducer, { ISearchReducer } from './search';

const reserved = generateReservedIDs();

export interface IGlobalState {
  books: IBookWithId[];
  cart: number[];
  reserved: number[];
  router: RouterState;
  search: ISearchReducer;
}

const rootReducer = combineReducers<IGlobalState>({
  books: booksReducer,
  cart: cartReducer,
  reserved: () => reserved, // attention, fake reducer. Randomly generate reserved IDs for now.
  router: routerReducer,
  search: searchReducer,
});
​
export default rootReducer;
