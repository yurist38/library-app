import actions, { IAddToCart, IRemoveFromCart } from '../actions/cart';

const initialState: number[] = [];

type CartAction = IAddToCart | IRemoveFromCart;

function cartReducer(state: number[] = initialState, action: CartAction): number[] {
  switch (action.type) {
    case actions.types.ADD_TO_CART: {
      const { bookId } = action.payload;

      if (state.indexOf(bookId) >= 0) {
        return state;
      }

      return [...state, action.payload.bookId];
    }
    case actions.types.REMOVE_FROM_CART: {
      const { bookId } = action.payload;

      if (state.indexOf(bookId) === -1) {
        return state;
      }

      return state.filter((id) => id !== bookId);
    }
    default:
      return state;
  }
}

export default cartReducer;
